import {FetcherFactory} from '@s-ui/domain'
import cookie from '@s-ui/js/lib/cookie'
import UsersEntitiesFactory from '../Entities/factory.js'
import factoryLogger from '../../logger/factory'

import MoviesValueObjectsFactory from '../../movies/ValueObjects/factory'
import MovieMapperFactory from '../../movies/Mappers/factory'

import FireBaseUsersRepository from './FireBaseUsersRepository'
import HTTPUsersRepository from './HTTPUsersRepository'

class UsersRepositoriesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'FireBaseUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static httpUsersRepository = ({config}) =>
    new HTTPUsersRepository({
      config,
      cookie,
      log: factoryLogger({prefix: 'HTTPUsersRepository'}),
      userEntityFactory: UsersEntitiesFactory.userEntity,
      moviesListValueObject: MoviesValueObjectsFactory.moviesListValueObject,
      mapper: MovieMapperFactory.movieMapper({config}),
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

export default UsersRepositoriesFactory
