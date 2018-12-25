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
    const keyStorage = this._config.get('SESSION_FIREBASE_KEY')

    const userFromStorage = this._storage.getItem(keyStorage)

    if (userFromStorage) {
      const userDB = JSON.parse(userFromStorage)
      return this._userEntityFactory(userDB)
    }

    const user = firebase.auth().currentUser
    if (!user) return false

    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()

    return this._userEntityFactory(userDB)
  }

  async create({email, name, password} = {}) {
    this._log(`CREATING USER with email:${email}, name:${name} and password`)
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .set({
        email,
        name,
        id: user.uid
      })

    return this._userEntityFactory({email, id: user.uid})
  }

  async login({email, password} = {}) {
    this._log(`LOGIN USER with email:${email} and password`)
    const firebase = this._config.get('firebase')
    const keyStorage = this._config.get('SESSION_FIREBASE_KEY')
    const {user} = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()

    this._storage.setItem(keyStorage, JSON.stringify(userDB))
    return this._userEntityFactory(userDB)
  }

  logout() {
    this._log(`LOGOUT USER`)
    const firebase = this._config.get('firebase')
    const keyStorage = this._config.get('SESSION_FIREBASE_KEY')
    this._storage.removeItem(keyStorage)
    return firebase.auth().signOut()
  }
}

export default FireBaseUsersRepository
