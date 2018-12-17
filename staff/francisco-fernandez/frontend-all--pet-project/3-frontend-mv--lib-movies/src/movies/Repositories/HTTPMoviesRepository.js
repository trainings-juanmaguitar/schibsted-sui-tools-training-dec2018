import MoviesRepository from './MoviesRepository'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, moviesEntityFactory, fetcher}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._moviesEntityFactory = moviesEntityFactory
  }

  async popular() {
    const url = this._config.get('URL_JSON_MOVIES')
    const key = this._config.get('URL_KEY')
    const {data: {results}} = await this._fetcher.get(`${url}/movie/popular?api_key=${key}`)

    return results.map(this._moviesEntityFactory)
  }

  async searchByName({query}) {
    const url = this._config.get('URL_JSON_MOVIES')
    const key = this._config.get('URL_KEY')
    const {data: {results}} = await this._fetcher.get(`${url}/search/movie?api_key=${key}&query=${query}`)

    return results.map(this._moviesEntityFactory)
      
  }
}

export default HTTPMoviesRepository
