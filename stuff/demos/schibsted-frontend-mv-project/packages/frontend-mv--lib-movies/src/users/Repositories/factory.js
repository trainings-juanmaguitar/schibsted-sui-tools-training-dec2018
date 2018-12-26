import UsersEntitiesFactory from '../Entities/factory.js'
import factoryLogger from '../../logger/factory'

import FireBaseUsersRepository from './FireBaseUsersRepository'

class UsersRepositoriesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      log: factoryLogger({prefix: 'FireBaseUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })
}

export default UsersRepositoriesFactory
