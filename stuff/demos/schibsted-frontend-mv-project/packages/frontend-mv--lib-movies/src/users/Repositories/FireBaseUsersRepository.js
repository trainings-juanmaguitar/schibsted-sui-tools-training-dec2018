import UsersRepository from './UsersRepository'

class FireBaseUsersRepository extends UsersRepository {
  constructor({config, log, userEntityFactory} = {}) {
    super()
    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
  }

  async loginWithGoogle() {
    /* eslint-disable */
    this._log(`LOGIN USER with Google Provider`)
    const firebase = this._config.get('firebase')
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const {user} = await firebase.auth().signInWithPopup(googleProvider)
    const token = await firebase.auth().currentUser.getIdToken()

    const {uid, displayName, email, photoURL} = user
    return this._userEntityFactory({uid, displayName, email, photoURL, token})
  }
}

export default FireBaseUsersRepository
