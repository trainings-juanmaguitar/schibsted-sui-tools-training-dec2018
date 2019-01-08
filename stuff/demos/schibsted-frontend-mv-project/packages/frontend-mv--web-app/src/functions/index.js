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
const cookieLib = require('@s-ui/js/lib/cookie').default

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

app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(function (req, res, next) {
  const {cookies} = req
  const cookie = cookies[COOKIE_SESSION_NAME]
  if (!cookie) {
    req.token = null
    next();
    return
  }
  const {token} = JSON.parse(cookie)
  req.token = token
  next();
});

app.get('/users/current', async (req, res) => {
  console.log(new Date())
  const {token} = req
  console.log({token})
  if (!token) {
    res.json({ logged: false })
    return;
  }

  const [errDecodedToken, decodedToken] = await to(
    admin.auth().verifyIdToken(token)
  )
  if (errDecodedToken) {
    res.status(500).json(errDecodedToken)
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
    res.status(500).json(errUserDB)
    return
  }

  res.json({
    logged: true,
    user: userDB.val()
  })
})

app.get('/users/current/favorites', async (req, res) => {
  console.log(new Date())
  const {token} = req
  if (!token) res.status(404).send('Token not found in headers')

  const [errDecodedToken, decodedToken] = await to(
    admin.auth().verifyIdToken(token)
  )
  if (errDecodedToken) {
    res.status(500).json(errDecodedToken)
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
    res.status(500).json(errUserDB)
    return
  }

  const {favorites} = userDB.val()

  console.log(`favorites → ${favorites}`)
  
  const movieDetailsFavorites = favorites
    .map(idMovie => {
      const url = new URL(
        `${FIREBASE_API_URL}/${THEMOVIEDB_API_BASE_URL}/movie/${idMovie}`
      )
      url.searchParams.append('api_key', THEMOVIEDB_API_KEY)
      return {
        url: url.href
      }
    })
    .map(
      options =>
        new Promise((resolve, reject) => {
          request(options, (error, response, body) => {
            if (error) {
              reject('Something went wrong!')
              return
            }
            const json = JSON.parse(body)
            // const json = JSON.parse(body.replace(/\\/g, ''))
            cache[options.url] = json
            resolve(json)
          })
        })
    )

  const [errFavoritesMovies, favoritesMovies] = await to(
    Promise.all(movieDetailsFavorites)
  )

  if (errFavoritesMovies) {
    res.status(500).json(errFavoritesMovies)
    return
  }
  
  res.json({
    page: 1,
    total_results: favoritesMovies.length,
    total_pages: 1,
    results: favoritesMovies
  })
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
        res.status(500).send('Something went wrong!')
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
