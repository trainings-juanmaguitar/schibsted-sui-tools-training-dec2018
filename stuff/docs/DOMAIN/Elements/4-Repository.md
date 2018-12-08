### **Repository**

A repository is an interface to access instances of the Domain Model (Entities and ValueObjects). These instances are usually retrieved remotely, but not always.

The communication with the domain is always async, even when the operation is sync, and it always returns an Entity or ValueObject. If you have to return a list of Domain Objects, you must use a ValueObject. It should have a `toJSON` method that will use the `toJSON` method of each Domain Object. Some repository examples could be Firebase, MongoDB, API, localStorage or data from a file in the disk.

```javascript
export default class SearchRepository extends Repository {
  lastSearchParams () {
     throw new Error('[lastSearchParams] method must be implemented')
  }

  vehiclesSearch () {
    throw new Error('[vehiclesSearch] method must be implemented')
  }
}

export default class EmptySearchRepository extends SearchRepository {
   lastSearchParams () {
      return Promise.resolve()
   }

   vehiclesSearch () {
      return Promise.resolve()
   }
}

export default class HTTPSearchRepository extends SearchRepository {
  constructor({ config, fetcher, vehiclesSearchResponseMapper }) {
    this._config = config
    this._fetcher = fetcher
    // instance of HTTPSearchRepositoryVehiclesSearchResponseToVehiclesValueObjectMapper
    this._vehiclesSearchResponseMapper = vehiclesSearchResponseMapper
  })

  vehiclesSearch (vehiclesSearchParamsValueObject) {
    // we're passing a valueObject to the repository
    // so we need to transform it to a plain object to use it
    const vehiclesSearchParams = vehiclesSearchParamsValueObject.toJSON()
    // this kind of transform without mapper is accepted while
    // it's only for renaming the keys for the API params
    const params = {
      vehicle: vehiclesSearchParams.name,
      year: vehiclesSearchParams.year,
      manufacturer: vechilesSearchParams.trademark
    }

    return this._fetcher
      .get(`this._config.get('API_URL')/vehiclesSearch/`, {params})
      .then(this._vehiclesSearchResponseMapper)
  }
}
```

If we need a fetcher to get data from the outside we should use the [`FetcherFactory`](https://github.com/SUI-Components/sui/tree/master/packages/sui-domain#using-fetcher) provided by `@s-ui/domain`

```js
import { FetcherFactory } from '@s-ui/domain'
import UserEntitiesFactory from '../../user/Entities/factory'
import UserValueObjectsFactory from '../../user/ValueObjects/factory'

import HTTPUserRepository from './HTTPUserRepository'

export default class UserRepositoriesFactory {
  static hTTPUserRepository = ({config}) =>
    new HTTPUserRepository({
      config,
      fetcher: FetcherFactory.httpFetcher(),
      userEntityFactory: UserEntitiesFactory.userEntity,
      emptyUserValueObjectFactory: UserValueObjectsFactory.emptyUserValueObject
    })
}
```


A Repository could use:

* Mappers
* Entities
* ValueObjects
