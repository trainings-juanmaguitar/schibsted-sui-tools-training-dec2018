import {FetcherFactory} from '@s-ui/domain'
import cookie from '@s-ui/js/lib/cookie'
import UsersEntitiesFactory from '../Entities/factory.js'
import factoryLogger from '../../logger/factory'

import FireBaseUsersRepository from './FireBaseUsersRepository'
import CookieUsersRepository from './CookieUsersRepository'
import HTTPUsersRepository from './HTTPUsersRepository'

class UsersRepositoriesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'FireBaseUsersRepository'}),
      sessionEntityFactory: UsersEntitiesFactory.sessionEntity,
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static cookieUsersRepository = ({config}) =>
    new CookieUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'CookieUsersRepository'}),
      sessionEntityFactory: UsersEntitiesFactory.sessionEntity
    })

  static httpUsersRepository = ({config}) =>
    new HTTPUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'HTTPUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

export default UsersRepositoriesFactory
