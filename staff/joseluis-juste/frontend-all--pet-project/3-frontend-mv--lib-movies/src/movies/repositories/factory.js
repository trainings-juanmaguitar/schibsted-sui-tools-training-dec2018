import { FetcherFactory } from "@s-ui/domain";
import MoviesEntitiesFactory from "../entities/factory";
import HTTPMoviesRepository from "./httpmoviesrepository";

class MoviesRepositoriesFactory {
  static httpMoviesRepository = ({ config }) =>
    new HTTPMoviesRepository({
      config,
      MoviesEntitiesFactory: MoviesEntitiesFactory.movieEntity,
      fetcher: FetcherFactory.httpFetcher({ config })
    });
}

export default MoviesRepositoriesFactory;
