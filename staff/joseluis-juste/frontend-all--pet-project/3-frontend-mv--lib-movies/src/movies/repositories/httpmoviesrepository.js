import MoviesRepository from "./moviesrepository";
import utils from '../../utils'

class HTTPMoviesRepository extends MoviesRepository {
  constructor({ config, MoviesEntitiesFactory, fetcher }) {
    super();
    this._fetcher = fetcher;
    this._config = config;
    this._MoviesEntitiesFactory = MoviesEntitiesFactory;
  }
  async getPopulars(page = 1) {
  
    const url = `${this._config.get("URL_MOVIES")}movie/popular?api_key=${this._config.get("API_KEY")}&language=en-US&page=${page}`
    const data = await this._fetcher.get(url);
    return this._MoviesEntitiesFactory({
        pagination:{
        actual_page:data.data.page,
        total_rows:data.data.total_results,
        total_pages:data.data.total_pages
      },
      data:data.data.results  
    })
  }

  async getMovieDetail(id) {
  
    const url = `${this._config.get("URL_MOVIES")}movie/${id}?api_key=${this._config.get("API_KEY")}`
    let {data} = await this._fetcher.get(url);
    return  this._MoviesEntitiesFactory(data)
  }

  async getLatestMovie() {
  
    const url = `${this._config.get("URL_MOVIES")}movie/latest?api_key=${this._config.get("API_KEY")}`
    let {data} = await this._fetcher.get(url);
    return this._MoviesEntitiesFactory(data)
  }

  async searchMovies(query, page = 1) {
  
    if (!query || utils.isEmpty(query))
      return await this.getPopulars(1)

    const url = `${this._config.get("URL_MOVIES")}movie/popular?api_key=${this._config.get("API_KEY")}&language=en-US&page=${page}`
    let {data} = await this._fetcher.get(url);
    let results = data.results.map(this._MoviesEntitiesFactory)
    results = results.filter(movie => movie.filter(query))
    return this._MoviesEntitiesFactory({
      pagination:{
      actual_page:page,
      total_rows:results.length,
      total_pages:results.length % 10 === 0 ? results.length / 10 : Math.trunc((results.length / 10) + 1)
    },
    data:results
    })
  
  }
}

export default HTTPMoviesRepository;
