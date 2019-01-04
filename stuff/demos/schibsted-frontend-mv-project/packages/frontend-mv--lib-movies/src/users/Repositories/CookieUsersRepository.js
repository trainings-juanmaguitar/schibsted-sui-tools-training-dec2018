import UsersRepository from './UsersRepository'

export default class CookieUserRepository extends UsersRepository {
  constructor({config, cookie, log, sessionEntityFactory} = {}) {
    super()
    this._config = config
    this._cookie = cookie
    this._log = log
    this._sessionEntityFactory = sessionEntityFactory
  }

  async current({cookies}) {
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    if (cookies) {
      const cookiesSession = this._cookie.parse(cookies)
      const {token} = JSON.parse(cookiesSession[cookieSessionName])
      return this._sessionEntityFactory({token})
    } else {
      if (this._cookie.get(cookieSessionName)) {
        const {token} = this._cookie.getJSON(cookieSessionName)
        return this._sessionEntityFactory({token})
      }
    }
  }

  login(session) {
    const {token} = session.toJSON()
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    this._log(`Persisting TOKEN in cookie: ${cookieSessionName}`)
    return Promise.resolve(this._cookie.set(cookieSessionName, {token}))
  }

  logout() {
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    return Promise.resolve(this._cookie.remove(cookieSessionName))
  }
}
