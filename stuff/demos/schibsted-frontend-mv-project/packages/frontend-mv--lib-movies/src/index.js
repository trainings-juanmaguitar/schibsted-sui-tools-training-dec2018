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
  /* movies */
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  get_movie_details_by_id_use_case: MoviesUseCasesFactory.getMovieDetailsByIdUseCase(
    {config}
  ),
  get_popular_movies_use_case: MoviesUseCasesFactory.getPopularMoviesUseCase({
    config
  }),
  /* users */
  get_logged_user_use_case: UsersUseCasesFactory.currentUserUseCase({config}),
  login_with_google_use_case: UsersUseCasesFactory.loginWithGoogleUseCase({
    config
  }),
  logout_use_case: UsersUseCasesFactory.logoutUseCase({config})
  /* users-movies */
  // get_favorites_movies_user_use_case: UsersUseCasesFactory.getFavoritesMoviesUserUseCase(
  //   {config}
  // )
  // add_favorite_movie_user_use_case: UsersUseCasesFactory.addFavoriteMovieUserUseCase(
  //   {config}
  // ),
  // remove_favorite_movie_user_use_case: UsersUseCasesFactory.removeFavoriteMovieUserUseCase(
  //   {config}
  // )
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
