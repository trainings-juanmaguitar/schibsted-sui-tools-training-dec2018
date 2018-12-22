import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'
import Config from './config'

const config = new Config()

const useCases = {
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  get_movie_details_by_id_use_case: MoviesUseCasesFactory.getMovieDetailsByIdUseCase(
    {config}
  ),
  get_popular_movies_use_case: MoviesUseCasesFactory.getPopularMoviesUseCase({
    config
  })
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
