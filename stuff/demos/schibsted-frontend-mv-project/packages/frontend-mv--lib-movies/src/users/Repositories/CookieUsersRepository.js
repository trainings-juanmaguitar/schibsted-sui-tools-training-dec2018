import UsersRepository from './UsersRepository'

export default class CookieUserRepository extends UsersRepository {
  constructor({config, cookie, log, sessionEntityFactory} = {}) {
    super()
    this._config = config
    this._cookie = cookie
    this._log = log
    this._sessionEntityFactory = sessionEntityFactory
  }

  current() {
    const cookieSessionName = this._config.get('COOKIE_SESSION_NAME')
    const {token} = this._cookie.getJSON(cookieSessionName)
    const sessionEntity = this._sessionEntityFactory({token})
    return Promise.resolve(sessionEntity)
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
