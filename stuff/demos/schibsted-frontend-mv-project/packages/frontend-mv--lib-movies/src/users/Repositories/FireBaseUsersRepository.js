import UsersRepository from './UsersRepository'

class FireBaseUsersRepository extends UsersRepository {
  constructor({config, log, cookie, userEntityFactory} = {}) {
    super()
    this._config = config
    this._log = log
    this._cookie = cookie
    this._userEntityFactory = userEntityFactory
  }

  async loginWithGoogle() {
    this._log(`LOGIN USER with Google Provider`)
    const firebase = this._config.get('firebase')
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const user = await firebase.auth().signInWithPopup(googleProvider)
    const token = await firebase.auth().currentUser.getIdToken()

    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    this._log(`Persisting TOKEN in cookie: ${cookieSessionName}`)
    this._cookie.set(cookieSessionName, {token})

    return this._userEntityFactory(user)
  }
}

export default FireBaseUsersRepository
