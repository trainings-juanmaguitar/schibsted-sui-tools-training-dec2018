import MoviesRepository from './MoviesRepository'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, moviesEntityFactory, fetcher}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._moviesEntityFactory = moviesEntityFactory
  }
  async listMoviesUseCase() {
    const url = this._config.get('URL_JSON_MOVIES')
    const key = this._config.get('API_KEY')

    const {data: results} = await this._fetcher.get(url + 'movie/popular' + key)

    const {results : res} = results

    return res.map(this._moviesEntityFactory)
  }
}

export default HTTPMoviesRepository
