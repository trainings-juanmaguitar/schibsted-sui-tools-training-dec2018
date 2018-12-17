import MoviesRepositoriesFactory from "../repositories/factory";
import GetPopularsUseCase from "./getpopularssusecase";

class MoviesUseCasesFactory {
  static getPopularsUseCase = ({ config }) =>
    new GetPopularsUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({ config })
    });
}

export default MoviesUseCasesFactory;
