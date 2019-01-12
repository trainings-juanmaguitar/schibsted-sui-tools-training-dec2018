import to from 'await-to-js'
import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({config, log, fetcher, userEntityFactory, cookie} = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
  }

  async current() {
    this._log(`Getting CURRENT user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/`
    const [err, response] = await to(this._fetcher.get(url))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }

    const {
      data: {user}
    } = response
    return user && this._userEntityFactory(user)
  }
}

export default HTTPUsersRepository
