import MoviesRepository from './MoviesRepository'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, mapper, log, fetcher, moviesListValueObject} = {}) {
    super()
    this._config = config
    this._log = log
    this._fetcher = fetcher
    this._mapper = mapper
    this._moviesListValueObject = moviesListValueObject

    this._host = this._config.get('FIREBASE_API_URL')
    this._moviesHost = this._config.get('THEMOVIEDB_API_BASE_URL')
  }

  async popular({page: pageRequest, language, region} = {}) {
    this._log(
      `Getting POPULAR movies on page:${pageRequest}, language:${language}, region:${region}`
    )
    const {_host, _moviesHost} = this
    const url = `${_host}/${_moviesHost}/movie/popular`
    const options = {
      params: {},
      withCredentials: true
    }
    if (pageRequest) options.params.page = pageRequest
    if (language) options.params.language = language
    if (region) options.params.region = region

    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = await this._fetcher.get(url, options)

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }

  // all methods of the domain are named → receives an object w/ properties
  async search({query, page: pageRequest, language, region} = {}) {
    this._log(
      `Getting movies by query:${query}, page:${pageRequest}, language:${language}, region:${region}`
    )

    const {_host, _moviesHost} = this
    const url = `${_host}/${_moviesHost}/search/movie?query=${query}`
    const options = {params: {}}
    if (pageRequest) options.params.page = pageRequest
    if (language) options.params.language = language
    if (region) options.params.region = region

    const {
      data: {
        page,
        total_results: totalResults,
        total_pages: totalPages,
        results
      }
    } = await this._fetcher.get(url, options)

    return this._moviesListValueObject({
      page,
      totalResults,
      totalPages,
      movies: results.map(this._mapper.map)
    })
  }

  async getMovieById({id: idMovie}) {
    this._log(`Getting movie by query → ${idMovie}`)

    const {_host, _moviesHost} = this
    const url = `${_host}/${_moviesHost}/movie/${idMovie}`

    const {data: result} = await this._fetcher.get(url)
    return this._mapper.map(result)
  }
}

export default HTTPMoviesRepository
