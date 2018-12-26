import UsersRepository from './UsersRepository'

class FireBaseUsersRepository extends UsersRepository {
  constructor({
    config,
    log,
    storage,
    firebasePersistence,
    userEntityFactory
  } = {}) {
    super()

    this._config = config
    this._log = log
    this._storage = storage
    this._firebasePersistence = firebasePersistence
    this._userEntityFactory = userEntityFactory
  }

  async current() {
    this._log(`Getting CURRENT user`)
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser
    if (!user) return false

    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()

    return this._userEntityFactory(userDB)
  }

  async loginWithGoogle() {
    this._log(`LOGIN USER with Google Provider`)
    const firebase = this._config.get('firebase')
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const result = await firebase.auth().signInWithPopup(googleProvider)
    const {user} = result

    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()

    return this._userEntityFactory(userDB)
  }

  logout() {
    this._log(`LOGOUT USER`)
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}

export default FireBaseUsersRepository
