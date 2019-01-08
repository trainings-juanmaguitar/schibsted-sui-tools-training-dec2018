import to from 'await-to-js'
import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({
    config,
    log,
    fetcher,
    cookie,
    mapper,
    moviesListValueObject,
    userEntityFactory
  } = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
    this._cookie = cookie
    this._moviesListValueObject = moviesListValueObject
    this._mapper = mapper
  }

  async current() {
    this._log(`Getting CURRENT user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/`

    const options = {
      withCredentials: true
    }

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

  async favoriteMovies() {
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/favorites`

    const options = {
      withCredentials: true
    }

    const [err, response] = await to(this._fetcher.get(url, options))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }
    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = response

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }

  async addFavoriteMovies() {
    this._log(`Getting favorite Movies CURRENT user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/favorites`

    const options = {
      withCredentials: true
    }

    const [err, response] = await to(this._fetcher.get(url, options))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }
    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = response

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }
}

export default HTTPUsersRepository
