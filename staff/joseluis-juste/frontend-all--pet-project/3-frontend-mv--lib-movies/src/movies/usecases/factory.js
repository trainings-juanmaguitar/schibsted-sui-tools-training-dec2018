import MoviesRepositoriesFactory from "../repositories/factory";
import GetPopularsUseCase from "./getpopularssusecase";
import GetMovieDetailUseCase from "./getmoviedetailusecase";
import GetLatestMovieUseCase from "./getlatestmovieusecase";
import SearchMoviesUseCase from './searchmoviesusecase'

class MoviesUseCasesFactory {
  static getPopularsUseCase = ({ config }) =>
    new GetPopularsUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({ config })
    });

    static getMovieDetailUseCase = ({ config }) =>
    new GetMovieDetailUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({ config })
    });

    static getLatestMovieUseCase = ({ config }) =>
    new GetLatestMovieUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({ config })
    });

    static searchMoviesUseCase = ({ config }) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({ config })
    });
}

export default MoviesUseCasesFactory;
