import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'
import UsersUseCasesFactory from './users/UseCases/factory'
import Config from './config'

const config = new Config()

const useCases = {
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  get_movie_details_by_id_use_case: MoviesUseCasesFactory.getMovieDetailsByIdUseCase(
    {config}
  ),
  get_popular_movies_use_case: MoviesUseCasesFactory.getPopularMoviesUseCase({
    config
  }),
  create_users_use_case: UsersUseCasesFactory.createUsersUseCase({config}),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({
    config
  }),
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config}),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config})
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
