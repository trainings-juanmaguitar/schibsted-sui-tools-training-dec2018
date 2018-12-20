import MoviesRepository from './MoviesRepository'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({config, moviesEntityFactory, fetcher, mapper}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._moviesEntityFactory = moviesEntityFactory
    this._mapper = mapper
  }
  async listPopularMovies() {
    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/movie/popular?api_key=${apiKey}`

    const {
      data: {results}
    } = await this._fetcher.get(url)

    return results.map(this._mapper.map)
  }
  async listRecentMovies() {
    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/movie/upcoming?api_key=${apiKey}`

    const {
      data: {results}
    } = await this._fetcher.get(url)

    return results.map(this._mapper.map)
  }
  async listMoviesByName({query}) {
    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/search/movie?&query=${query}&api_key=${apiKey}`

    const {
      data: {results}
    } = await this._fetcher.get(url)

    return results.map(this._mapper.map)
  }
  async listMoviesById({id}) {
    const host = this._config.get('API_BASE_URL')
    const apiKey = this._config.get('API_KEY')

    const url = `${host}/movie/${id}?api_key=${apiKey}`

    const {data} = await this._fetcher.get(url)

    return this._mapper.map(data)
  }
}

export default HTTPMoviesRepository
