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
      data: {favorites}
    } = response

    const ids = Object.values(favorites)
    return ids.length && this._favoriteMoviesValueObject({ids})
  }

  async addFavoriteMovie({id}) {
    this._log(`Adding movie ${id} as Favorite for this user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/favorites/${id}`
    const [err, response] = await to(this._fetcher.post(url)) // eslint-disable-line
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }

    this._log(`movie ${id} added as Favorite succesfully`)
  }

  async removeFavoriteMovie({id}) {
    this._log(`Removing movie ${id} as Favorite for this user`)
    const host = this._config.get('FIREBASE_API_URL')
    const url = `${host}/favorites/${id}`
    const [err, response] = await to(this._fetcher.delete(url)) // eslint-disable-line
    if (err) {
      console.log(err) // eslint-disable-line
      return
    }

    this._log(`movie ${id} removed from Favorites succesfully`)
  }
}

export default HTTPFavoriteMoviesRepository
