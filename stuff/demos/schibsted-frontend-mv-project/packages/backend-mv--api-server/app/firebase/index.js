const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

const instance = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://moviesfinder-ecb7c.firebaseio.com/'
})

module.exports = {instance}