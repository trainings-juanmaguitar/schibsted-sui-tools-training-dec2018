import { EntryPointFactory } from "@s-ui/domain";
import MoviesUseCasesFactory from "./movies/usecases/factory";
import Config from "./config";

const config = new Config();
const useCases = {
  get_populars_use_case: MoviesUseCasesFactory.getPopularsUseCase({ config }),
  get_movie_detail_use_case: MoviesUseCasesFactory.getMovieDetailUseCase({ config }),
  get_latest_movie_use_case: MoviesUseCasesFactory.getLatestMovieUseCase({ config }),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({ config })
};


const Domain = EntryPointFactory({ config, useCases });

export default Domain;
