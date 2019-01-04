/* eslint-disable */
const URL = require('url').URL

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const to = require('await-to-js').default

require('dotenv').load()
const {THEMOVIEDB_API_KEY, THEMOVIEDB_API_BASE_URL} = process.env

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
    origin: true
  })
)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const getTokenFromHeaders = ({headers: {authorization}}) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1]
  }
  return null
}

app.get('/users/current', async (req, res) => {
  console.log(new Date())
  const token = getTokenFromHeaders(req)
  if (!token) res.status(404).send('Token not found in headers')

  const [errDecodedToken, decodedToken] = await to(admin.auth().verifyIdToken(token))
  if (errDecodedToken) {
    res.status(500).json(errDecodedToken)
    return
  }
  const {uid} = decodedToken

  const [errUserDB, userDB] = await to(instance
    .database()
    .ref(`/users/${uid}`)
    .once('value'))
  if (errUserDB) {
    res.status(500).json(errUserDB)
    return
  }
  
  res.send(userDB)
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

  const url = new URL(`https://${urlRequested}`);
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
