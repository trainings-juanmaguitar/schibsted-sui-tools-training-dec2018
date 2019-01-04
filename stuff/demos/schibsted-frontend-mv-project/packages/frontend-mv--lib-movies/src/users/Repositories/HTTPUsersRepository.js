import to from 'await-to-js'
import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({config, log, fetcher, cookie, userEntityFactory} = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
    this._cookie = cookie
  }

  async current({cookies}) {
    /* eslint-disable */
    if (!cookies) return
    this._log(`Getting CURRENT user`)
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    const cookie = this._cookie.parse(cookies)[cookieSessionName]
    const {token} = JSON.parse(cookie)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/`
    const options = {headers: {Authorization: `Bearer ${token}`}}

    const [err, response] = await to(this._fetcher.get(url, options))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }
    const {data: userDB} = response
    return this._userEntityFactory(userDB)
  }

  async logout() {
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    return this._cookie.remove(cookieSessionName)
  }
}

export default HTTPUsersRepository
