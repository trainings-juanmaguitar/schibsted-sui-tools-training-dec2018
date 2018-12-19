import MoviesRepository from './MoviesRepository'

export default class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, mapper, log, fetcher, moviesListValueObject} = {}) {
    super()
    this._config = config
    this._log = log
    this._fetcher = fetcher
    this._mapper = mapper
    this._moviesListValueObject = moviesListValueObject
  }

  async popular() {
    this._log(`Getting POPULAR movies`)

    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/movie/popular?api_key=${apiKey}`

    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = await this._fetcher.get(url)

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }

  // all methods of the domain are named → receives an object w/ properties
  async search({query} = {}) {
    this._log(`Getting movies by query → ${query}`)

    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/search/movie?api_key=${apiKey}&query=${query}`

    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = await this._fetcher.get(url)

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }

  async getMovieById({id: idMovie}) {
    this._log(`Getting movie by query → ${idMovie}`)

    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/movie/${idMovie}?api_key=${apiKey}`

    const {data: result} = await this._fetcher.get(url)
    return this._mapper.map(result)
  }
}
