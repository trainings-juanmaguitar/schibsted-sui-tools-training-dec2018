import {EntryPointFactory} from '@s-ui/domain'

import MoviesUseCasesFactory from './movies/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_popular_movies_use_case: MoviesUseCasesFactory.listPopularMoviesUseCase({
    config
  }),
  list_latest_movies_use_case: MoviesUseCasesFactory.listLatestMoviesUseCase({
    config
  }),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({
    config
  }),
  get_movie_details_use_case: MoviesUseCasesFactory.getMovieDetailsUseCase({
    config
  })
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
