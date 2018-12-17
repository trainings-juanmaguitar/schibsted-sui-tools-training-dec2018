import MoviesRepository from "./moviesrepository";

class HTTPMoviesRepository extends MoviesRepository {
  constructor({ config, moviesEntitiesFactory, fetcher }) {
    super();
    this._fetcher = fetcher;
    this._config = config;
    this._moviesEntitiesFactory = moviesEntitiesFactory;
  }
  async getPopulars() {
    const url = this._config.get("URL_MOVIES") + "movie/popular?api_key=" + this._config.get("API_KEY")

    const { results } = await this._fetcher.get(url);

    return results.map(this._moviesEntitiesFactory);
  }
}

export default HTTPMoviesRepository;
