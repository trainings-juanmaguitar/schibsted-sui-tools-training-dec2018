import UsersRepository from './UsersRepository'

class CookiesUsersRepository extends UsersRepository {
  constructor({config, log, cookie} = {}) {
    super()
    this._log = log
    this._cookie = cookie
    this._cookieUserName = config.get('COOKIE_SESSION_NAME')
  }

  async loginPersist({token}) {
    this._log(`Persisting TOKEN: ${this._cookieUserName}`)
    this._cookie && this._cookie.set(this._cookieUserName, {token})
  }

  async logout() {
    this._log(`Removing TOKEN: ${this._cookieUserName}`)
    this._cookie.remove(this._cookieUserName)
  }
}

export default CookiesUsersRepository
