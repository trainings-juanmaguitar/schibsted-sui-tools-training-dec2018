import MoviesRepository from './MoviesRepository'

class HTTPSMoviesRepository extends MoviesRepository {
  constructor({config, fetcher, mapper}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._mapper = mapper
  }
  async listPopularMovies() {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {
      data: {results}
    } = await this._fetcher.get(`${host}/movie/popular?api_key=${apiKey}`)
    return results.map(this._mapper.map)
  }
  async listLatestMovies() {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {
      data: {results}
    } = await this._fetcher.get(`${host}/movie/upcoming?api_key=${apiKey}`)
    return results.map(this._mapper.map)
  }
  async searchMovies({query}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')
    const {
      data: {results}
    } = await this._fetcher.get(
      `${host}/search/movie?api_key=${apiKey}&query=${query}`
    )
    return results.map(this._mapper.map)
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
