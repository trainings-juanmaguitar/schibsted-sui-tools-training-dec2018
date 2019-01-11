import to from 'await-to-js'
import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({config, log, fetcher, userEntityFactory, cookie} = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
    this._cookie = cookie
    this._cookieUserName = config.get('COOKIE_SESSION_NAME')
  }

  async current() {
    this._log(`Getting CURRENT user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/`
    const jsonToken = this._cookie.parse(this._config.get('cookies'))[
      this._cookieUserName
    ]
    const {token} = JSON.parse(jsonToken)
    const options = {headers: {Authorization: `Bearer ${token}`}}

    const [err, response] = await to(this._fetcher.get(url, options))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }

    const {
      data: {user}
    } = response
    return this._userEntityFactory(user)
  }
}

export default HTTPUsersRepository
