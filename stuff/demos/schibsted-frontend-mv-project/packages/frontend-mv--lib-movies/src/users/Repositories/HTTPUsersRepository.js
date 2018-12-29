import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({config, log, fetcher, userEntityFactory} = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
  }

  async current(session) {
    this._log(`Getting CURRENT user`)
    console.log(session) // eslint-disable-line

    // const user = firebase.auth().currentUser
    // if (!user) return false

    // const userDB = (await firebase
    //   .database()
    //   .ref(`/users/${user.uid}`)
    //   .once('value')).val()
    const {token} = session.toJSON()
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/`
    const options = {headers: {Authorization: `Bearer ${token}`}}
    console.log({token, host, url, options}) // eslint-disable-line

    const {data: userDB} = await this._fetcher.get(url, options)

    return this._userEntityFactory(userDB)
  }

  async loginWithGoogle() {
    this._log(`LOGIN USER with Google Provider`)
    const firebase = this._config.get('firebase')
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const result = await firebase.auth().signInWithPopup(googleProvider)
    const token = await firebase.auth().currentUser.getIdToken()
    // const {id_token: idToken} = googleUser.getAuthResponse()
    console.log(token) // eslint-disable-line
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

export default HTTPUsersRepository
