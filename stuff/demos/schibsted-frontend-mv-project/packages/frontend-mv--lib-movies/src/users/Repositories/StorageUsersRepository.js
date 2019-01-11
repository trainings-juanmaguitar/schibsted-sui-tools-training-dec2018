import UsersRepository from './UsersRepository'

class StorageUsersRepository extends UsersRepository {
  constructor({config, log, storage, userEntityFactory} = {}) {
    /* eslint-disable */
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._storage = storage
    this._storageUserName = this._config.get('STORAGE_USER_NAME')
    console.log(this)
  }

  async loginPersist({user}) {
    this._log(`Persisting USER: ${this._storageUserName}`)
    this._storage.setItem(this._storageUserName, JSON.stringify(user))
  }

  async current() {
    this._log(`Getting CURRENT user: ${this._storageUserName}`)
    const jsonUser = this._storage.getItem(this._storageUserName)
    if (jsonUser) {
      const user = JSON.parse(jsonUser)
      return this._userEntityFactory(user)
    }
  }

  async logout() {
    this._log(`Removing USER: ${this._storageUserName}`)
    this._storage.removeItem(this._storageUserName)
  }
}

export default StorageUsersRepository
