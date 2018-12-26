import UsersServicesFactory from '../Services/factory'

import CreateUsersUseCase from './CreateUsersUseCase'
import CurrentUsersUseCase from './CurrentUsersUseCase'
import IsPrivilegedUsersUseCase from './IsPrivilegedUsersUseCase'
import LoginUsersUseCase from './LoginUsersUseCase'
import LoginWithGoogleUsersUseCase from './LoginWithGoogleUsersUseCase'
import LogoutUsersUseCase from './LogoutUsersUseCase'

export default class UsersUseCasesFactory {
  static currentUsersUseCase = ({config}) =>
    new CurrentUsersUseCase({
      service: UsersServicesFactory.currentUsersService({config})
    })

  static loginWithGoogleUsersUseCase = ({config}) =>
    new LoginWithGoogleUsersUseCase({
      service: UsersServicesFactory.loginWithGoogleUsersService({config})
    })

  static logoutUsersUseCase = ({config}) =>
    new LogoutUsersUseCase({
      service: UsersServicesFactory.logoutUsersService({config})
    })

  static isPrivilegedUsersUseCase = ({config}) =>
    new IsPrivilegedUsersUseCase({
      currentUsersService: UsersServicesFactory.currentUsersService({config})
    })
}
