import UsersRepositoriesFactory from '../Repositories/factory'

import CurrentUserUseCase from './CurrentUsersUseCase'
import LoginWithGoogleUseCase from './LoginWithGoogleUsersUseCase'
import LogoutUseCase from './LogoutUsersUseCase'
import GetFavoritesMoviesUserUseCase from './GetFavoritesMoviesUserUseCase'

export default class UsersUseCasesFactory {
  static currentUserUseCase = ({config}) =>
    new CurrentUserUseCase({
      repository: UsersRepositoriesFactory.httpUsersRepository({config})
    })

  static loginWithGoogleUseCase = ({config}) =>
    new LoginWithGoogleUseCase({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static logoutUseCase = ({config}) =>
    new LogoutUseCase({
      repository: UsersRepositoriesFactory.httpUsersRepository({config})
    })

  static getFavoritesMoviesUserUseCase = ({config}) =>
    new GetFavoritesMoviesUserUseCase({
      repository: UsersRepositoriesFactory.httpUsersRepository({config})
    })
}
