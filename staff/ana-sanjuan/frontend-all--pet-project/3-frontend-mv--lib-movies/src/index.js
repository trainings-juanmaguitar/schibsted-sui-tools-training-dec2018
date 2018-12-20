import {EntryPointFactory} from '@s-ui/domain'

import MoviesUseCasesFactory from './movies/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_popular_movies_use_case: MoviesUseCasesFactory.listPopularMoviesUseCase({
    config
  }),
  list_recent_movies_use_case: MoviesUseCasesFactory.listRecentMoviesUseCase({
    config
  }),
  search_movies_by_name_use_case: MoviesUseCasesFactory.listMoviesByNameUseCase(
    {
      config
    }
  ),
  get_movie_by_id_use_case: MoviesUseCasesFactory.listMoviesByIdUseCase({
    config
  })
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
