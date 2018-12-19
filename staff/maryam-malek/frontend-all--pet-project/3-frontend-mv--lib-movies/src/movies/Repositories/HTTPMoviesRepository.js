import MoviesRepository from './MoviesRepository'

class HTTPSMoviesRepository extends MoviesRepository {
  constructor({config, fetcher, mapper, moviesListValueObjectFactory}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._mapper = mapper
    this._moviesListValueObjectFactory = moviesListValueObjectFactory
  }
  async listPopularMovies() {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')

    const {
      data: {
        results: movies,
        page: actualPage,
        total_pages: totalPages,
        total_results: totalResults
      }
    } = await this._fetcher.get(`${host}/movie/popular?api_key=${apiKey}`)

    return this._moviesListValueObjectFactory({
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(this._mapper.map)
    })
  }
  async listLatestMovies() {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {
      data: {
        results: movies,
        page: actualPage,
        total_pages: totalPages,
        total_results: totalResults
      }
    } = await this._fetcher.get(`${host}/movie/upcoming?api_key=${apiKey}`)
    return this._moviesListValueObjectFactory({
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(this._mapper.map)
    })
  }
  async searchMovies({query}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {
      data: {
        results: movies,
        page: actualPage,
        total_pages: totalPages,
        total_results: totalResults
      }
    } = await this._fetcher.get(
      `${host}/search/movie?api_key=${apiKey}&query=${query}`
    )
    return this._moviesListValueObjectFactory({
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(this._mapper.map)
    })
  }
  async getMovieDetails({id}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {data} = await this._fetcher.get(
      `${host}/movie/${id}?api_key=${apiKey}`
    )
    return this._mapper.map(data)
  }
}

export default HTTPSMoviesRepository
