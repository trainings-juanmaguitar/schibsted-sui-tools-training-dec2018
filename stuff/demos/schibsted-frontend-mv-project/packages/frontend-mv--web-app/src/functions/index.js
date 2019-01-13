/* eslint-disable */
const URL = require('url').URL

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const to = require('await-to-js').default

require('dotenv').load()
const {
  THEMOVIEDB_API_KEY,
  THEMOVIEDB_API_BASE_URL,
  FIREBASE_API_URL,
  COOKIE_SESSION_NAME
} = process.env

/* Express with CORS & automatic trailing '/' solution */
const app = express()

var serviceAccount = require('./serviceAccountKey.json')

const instance = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://moviesfinder-ecb7c.firebaseio.com/'
})

const options = {
  headers: {
    'User-Agent': 'request',
    Accept: 'application/vnd.github.mercy-preview+json'
  }
}

const cache = {}
let counter = 0

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const getTokenFromHeaders = ({headers: {authorization}}) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1]
  }
  return null
}

app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(
  asyncMiddleware(async (req, res, next) => {
    const {cookies} = req
    const cookie = cookies && cookies[COOKIE_SESSION_NAME]

    if (cookie) {
      const {token: tokenFromCookie} = JSON.parse(cookie)
      token = tokenFromCookie
    } else {
      token = getTokenFromHeaders(req)
    }

    if (!token) {
      req.user = null
      next()
      return
    }

    const [errDecodedToken, decodedToken] = await to(
      admin.auth().verifyIdToken(token)
    )

    if (errDecodedToken) {
      res.json({user: null, err: errDecodedToken})
      return
    }
    const {uid} = decodedToken

    const [errUserDB, userDB] = await to(
      instance
        .database()
        .ref(`/users/${uid}`)
        .once('value')
    )
    if (errUserDB) {
      res.json({user: null, err: errUserDB})
      return
    }
    req.user = userDB.val()
    next()
  })
)

app.post('/favorites/:id', async (req, res) => {
  const {
    user: {id: uid},
    params: {id}
  } = req

  const [errFavoritesRef, favoritesRef] = await to(
    instance
      .database()
      .ref(`/users/${uid}`)
      .child('favorites')
      .push().set(id)
  )

  if (errFavoritesRef) {
    res.json({user: null, err: errFavoritesRef})
    return
  }

  res.json({msg: `success adding movie ${id} as favorite for user ${uid}`})
})

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

app.delete('/favorites/:id', async (req, res) => {

  const {
    user: {id: uid, favorites},
    params: {id}
  } = req

  const keyToRemove = getKeyByValue(favorites, id)


  const [errFavoritesRef, favoritesRef] = await to(
    instance
      .database()
      .ref(`/users/${uid}`)
      .child('favorites')
      .child(keyToRemove)
      .remove()
  )

  if (errFavoritesRef) {
    res.json({user: null, err: errFavoritesRef})
    return
  }

  res.json({msg: `success removing movie ${id} from favorites for user ${uid}`})
})


app.get('/users/current', async (req, res) => {
  const {user} = req
  res.json({user})
})

app.get('/users/current/favorites', async (req, res) => {
  if (req.user) {
    const {
      user: {favorites}
    } = req
    res.json({favorites: Object.values(favorites)})
  } else {
    res.json({favorites: []})
  }
})

app.get('*', (req, res) => {
  const urlRequested = req.originalUrl
  console.log('-'.repeat(20))
  console.log(`→ Attempt ${++counter}`)
  console.log('path requested = ' + urlRequested)

  if (urlRequested.includes('favicon.ico')) {
    res.status(500).send("Couldn't get a JSON!")
    return
  }

  if (!urlRequested.includes(THEMOVIEDB_API_BASE_URL)) {
    console.log('exiting...')
    res.status(500).send("Couldn't get a JSON!")
    return
  }

  const url = new URL(`https://${urlRequested}`)
  url.searchParams.append('api_key', THEMOVIEDB_API_KEY)

  options.url = url.href

  if (cache[options.url]) {
    console.log('💾 from cache...')
    res.json(cache[options.url])
  } else {
    console.log('🔥 requesting: ' + options.url)
    console.log(options)
    request(options, (error, response, body) => {
      if (error) {
        res.status(500).send(error)
        return
      }
      const json = JSON.parse(body)
      // const json = JSON.parse(body.replace(/\\/g, ''))
      cache[options.url] = json
      res.json(json)
    })
  }
})

// not as clean, but a better endpoint to consume
const api = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app(request, response)
})

module.exports = {api}
