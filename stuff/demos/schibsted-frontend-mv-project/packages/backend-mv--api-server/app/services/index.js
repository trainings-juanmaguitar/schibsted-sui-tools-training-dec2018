const admin = require("firebase-admin")
const to = require("await-to-js").default
const { instance } = require("../firebase")

const addFavoriteService = ({ uid, id }) => {
  return to(
    instance
      .database()
      .ref(`/users/${uid}`)
      .child("favorites")
      .push()
      .set(id)
  )
}

const removeFavoriteService = ({ uid, keyToRemove }) => {
  return to(
    instance
      .database()
      .ref(`/users/${uid}`)
      .child("favorites")
      .child(keyToRemove)
      .remove()
  )
}

const getCurrentUserService = ({ uid }) => {
  return to(
    instance
      .database()
      .ref(`/users/${uid}`)
      .once("value")
  )
}

const verifyToken = ({ token }) => {
  return to(admin.auth().verifyIdToken(token))
}

module.exports = {
  addFavoriteService,
  removeFavoriteService,
  getCurrentUserService,
  verifyToken
}
