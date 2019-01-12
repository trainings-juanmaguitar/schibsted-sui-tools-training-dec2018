import UsersServicesFactory from '../Services/factory'

import CurrentUserUseCase from './CurrentUsersUseCase'
import LoginWithGoogleUseCase from './LoginWithGoogleUsersUseCase'
import LogoutUseCase from './LogoutUsersUseCase'

export default class UsersUseCasesFactory {
  static currentUserUseCase = ({config}) =>
    new CurrentUserUseCase({
      service: UsersServicesFactory.currentUsersService({config})
    })

  static loginWithGoogleUseCase = ({config}) =>
    new LoginWithGoogleUseCase({
      service: UsersServicesFactory.loginWithGoogleUsersService({config})
    })

  static logoutUseCase = ({config}) =>
    new LogoutUseCase({
      service: UsersServicesFactory.logoutUsersService({config})
    })
}
