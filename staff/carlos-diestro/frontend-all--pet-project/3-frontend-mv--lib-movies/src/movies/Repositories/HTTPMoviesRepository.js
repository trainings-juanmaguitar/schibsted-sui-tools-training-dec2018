import MoviesRepository from './MoviesRepository'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, moviesEntityFactory, fetcher}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._moviesEntityFactory = moviesEntityFactory
  }

  async all() {
    const apiKey = this._config.get('API_KEY')
    
    const url = this._config.get('URL_BASE') + 'discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc'

    const {data: results} = await this._fetcher.get(url)

    const {results: movies} = results

    return movies.map(this._moviesEntityFactory)
  }
}

export default HTTPMoviesRepository
