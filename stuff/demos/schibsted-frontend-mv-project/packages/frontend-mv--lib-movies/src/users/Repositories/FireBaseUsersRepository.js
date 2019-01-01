import UsersRepository from './UsersRepository'

class FireBaseUsersRepository extends UsersRepository {
  constructor({config, log, cookie, sessionEntityFactory} = {}) {
    super()

    this._config = config
    this._log = log
    this._cookie = cookie
    this._sessionEntityFactory = sessionEntityFactory
  }

  async loginWithGoogle() {
    this._log(`LOGIN USER with Google Provider`)
    const firebase = this._config.get('firebase')
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    await firebase.auth().signInWithPopup(googleProvider)
    const token = await firebase.auth().currentUser.getIdToken()

    return this._sessionEntityFactory({token})
  }
}

export default FireBaseUsersRepository
