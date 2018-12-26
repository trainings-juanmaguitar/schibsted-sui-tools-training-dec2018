import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'
import UsersUseCasesFactory from './users/UseCases/factory'

import Config from './config'
import {firebase, firebaseApp} from './config/firebase'
import RefsManager from './config/firebase/RefsManager'

const config = new Config({
  firebase,
  firebaseApp,
  refsManager: new RefsManager({firebase})
})

const useCases = {
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  get_movie_details_by_id_use_case: MoviesUseCasesFactory.getMovieDetailsByIdUseCase(
    {config}
  ),
  get_popular_movies_use_case: MoviesUseCasesFactory.getPopularMoviesUseCase({
    config
  }),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({
    config
  }),
  login_with_google_users_use_case: UsersUseCasesFactory.loginWithGoogleUsersUseCase(
    {config}
  ),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config})
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
