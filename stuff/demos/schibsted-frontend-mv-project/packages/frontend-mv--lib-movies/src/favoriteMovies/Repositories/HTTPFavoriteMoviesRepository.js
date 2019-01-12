import FavoriteMoviesRepository from './FavoriteMoviesRepository'
import to from 'await-to-js'

class HTTPFavoriteMoviesRepository extends FavoriteMoviesRepository {
  constructor({config, log, fetcher, favoriteMoviesValueObject} = {}) {
    super()
    this._config = config
    this._log = log
    this._fetcher = fetcher
    this._favoriteMoviesValueObject = favoriteMoviesValueObject

    this._host = this._config.get('FIREBASE_API_URL')
    this._moviesHost = this._config.get('THEMOVIEDB_API_BASE_URL')
  }

  async getIds() {
    this._log(`Getting ID's FAVORITE movies`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/users/current/favorites`
    const [err, response] = await to(this._fetcher.get(url))
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }
    const {
      data: {favorites: ids}
    } = response

    return ids && this._favoriteMoviesValueObject({ids})
  }
}

export default HTTPFavoriteMoviesRepository
