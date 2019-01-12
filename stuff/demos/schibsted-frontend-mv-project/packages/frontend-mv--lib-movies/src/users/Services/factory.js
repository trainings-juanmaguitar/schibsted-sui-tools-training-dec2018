import UsersRepositoriesFactory from '../Repositories/factory'

import LoginWithGoogleUsersService from './LoginWithGoogleUsersService'
import LogoutUsersService from './LogoutUsersService'
import CurrentUserUsersService from './CurrentUserUsersService'

class UsersServicesFactory {
  static loginWithGoogleUsersService = ({config}) =>
    new LoginWithGoogleUsersService({
      cookiesRepository: UsersRepositoriesFactory.cookiesUsersRepository({
        config
      }),
      storageRepository: UsersRepositoriesFactory.storageUsersRepository({
        config
      }),
      fireBaseRepository: UsersRepositoriesFactory.fireBaseUsersRepository({
        config
      })
    })
  static currentUsersService = ({config}) =>
    new CurrentUserUsersService({
      config,
      storageRepository: UsersRepositoriesFactory.storageUsersRepository({
        config
      }),
      httpRepository: UsersRepositoriesFactory.httpUsersRepository({
        config
      })
    })
  static logoutUsersService = ({config}) =>
    new LogoutUsersService({
      cookiesRepository: UsersRepositoriesFactory.cookiesUsersRepository({
        config
      }),
      storageRepository: UsersRepositoriesFactory.storageUsersRepository({
        config
      })
    })
}

export default UsersServicesFactory
