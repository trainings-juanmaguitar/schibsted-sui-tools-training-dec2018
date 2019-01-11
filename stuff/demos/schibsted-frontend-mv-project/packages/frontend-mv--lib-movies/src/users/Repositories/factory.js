import {FetcherFactory} from '@s-ui/domain'
import cookie from '@s-ui/js/lib/cookie'
import UsersEntitiesFactory from '../Entities/factory.js'
import factoryLogger from '../../logger/factory'

import FireBaseUsersRepository from './FireBaseUsersRepository'
import HTTPUsersRepository from './HTTPUsersRepository'
import StorageUsersRepository from './StorageUsersRepository'
import CookiesUsersRepository from './CookiesUsersRepository'

class UsersRepositoriesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      log: factoryLogger({prefix: 'FireBaseUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static httpUsersRepository = ({config}) =>
    new HTTPUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'HTTPUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })

  static storageUsersRepository = ({config}) =>
    new StorageUsersRepository({
      config,
      storage: typeof window !== 'undefined' && window.localStorage,
      log: factoryLogger({prefix: 'StorageUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static cookiesUsersRepository = ({config}) =>
    new CookiesUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'CookiesUsersRepository'})
    })
}

export default UsersRepositoriesFactory
