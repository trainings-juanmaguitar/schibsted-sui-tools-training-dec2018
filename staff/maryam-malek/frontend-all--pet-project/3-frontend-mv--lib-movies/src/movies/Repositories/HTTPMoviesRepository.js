import MoviesRepository from './MoviesRepository'

class HTTPSMoviesRepository extends MoviesRepository {
  constructor({config, moviesEntityFactory, fetcher}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._moviesEntityFactory = moviesEntityFactory
  }
  async all() {
    const host = this._config.get('URL_TMDB_API')
    const apiKey = this._config.get('API_KEY')
    const {results} = await this._fetcher.get(`${host}/movie/popular/${apiKey}`)
    return results.map(this._moviesEntityFactory)
  }
}

export default HTTPSMoviesRepository
