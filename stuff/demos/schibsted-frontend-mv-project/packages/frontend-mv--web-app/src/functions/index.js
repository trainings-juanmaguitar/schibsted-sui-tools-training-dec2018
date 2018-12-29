/* eslint-disable */
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const Movies = require('../../../frontend-mv--lib-movies/lib')
const domain = new Movies()

require('dotenv').load()

/* Express with CORS & automatic trailing '/' solution */
const app = express()
const host = domain.get('config').get('API_BASE_URL')
// const { URL_BASE, TOKEN } = process.env

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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/user/current', (req, res) => {
  
  const user = admin.auth().currentUser
  
  instance
    .database()
    .ref(`/users/${user.uid}`)
    .once('value').val()
    .then(userDB => res.send(userDB))
})

  
  // const { token } = req.params
  // admin.auth().verifyIdToken(token)
  //   .then(function(decodedToken) {
  //     var uid = decodedToken.uid;
  //     res.send(`your uid is ${uid}`)
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  

const getTokenFromHeaders =  ({headers: {authorization}}) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
      return authorization.split(' ')[1];
  }
  return null;
}

app.get('/users/current', (req, res) => {
  console.log(req.headers)
  const token = getTokenFromHeaders(req)
  console.log(token)
  admin.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      
      console.log(instance.database().ref(`/users/${uid}`))
      instance
      .database()
      .ref(`/users/${uid}`)
      .once('value')
      .then(userDB => res.send(userDB))

    })
    .catch(function(error) {
      console.log(error)
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

  options.url = host + urlRequested

  console.log(options.url)

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

      const json = JSON.parse(body.replace(/\\/g, ''))
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

module.exports = { api }