### UseCase

Class that only has an `execute` method, which will receive all the parameters needed to perform the needed calculations. This method must always return a Promise even when the operation made internally is sync. Also, it must return a plain object. This plain object could be the output of an introspective method of a Domain Object, the `toJSON` method of a Domain Object or the output of a Mapper.

That means that there's no domain object (ValueObjects or Entities) outside the domain. Also, **UseCases can only be called outside the domain.**

At this point, **the entry parameters should be transformed to a ValueObject with the parameters.** This offers the advantage that it will be a single point of validation for these parameters. The only thing that the UseCase must do is the needed transformations between plain objects and a domain object (ValueObject or Entity) and call repositories or services in order to do all the logic there.

**UseCases name must have as a first word a verb** that will determine the action that it does.

![incorrect] CurrentUserUseCase
![correct] GetCurrentUserUseCase

![incorrect] LastSearchParamsUseCase
![correct] RetrieveLastSearchParamsUseCase

![incorrect] FavoriteUseCase
![correct] AddFavoriteUseCase

```javascript
import UseCase from '@s-ui/domain'

class GetCurrentUserUseCase extends UseCase {
  constructor({ searchParamsValueObjectFactory, service }) {
    super()
    this._searchParamsValueObjectFactory = searchParamsValueObjectFactory
    this._service = service
  }

  async execute (searchParams) {
    const searchParamsValueObject = this._searchParamsValueObjectFactory(searchParams))
    const realEstatesValueObject = this._service.execute({ searchParamsValueObject })
    return realEstatesValueObject.toJSON()
  }
}
```

It's important to note that UseCases can't accept a parameter in order to format the output. You SHOULD instead create different UseCases to format the output data and reuse the services.

![incorrect] Use the same UseCase to format the output data differently using a param
```javascript
class GetSearchParamsFromUrlForTealiumUseCase extends UseCase {
  constructor({ fromSearchParamsVOToTealiumJSON, getSearchParamsFromUrlService }) {
    super()
    this._mapper = fromSearchParamsVOToTealiumJSON
    this._service = getSearchParamsFromUrlService
  }

  async execute ({ format = 'tealium', url }) {
    const searchParamsValueObject = this._service.execute({ url })
    return format === 'tealium'
      ? this._mapper.map(searchParamsValueObject)
      : searchParamsValueObject.toJSON()
  }
}
```

In the next example, we could see how two useCases use the same service but the output of each UseCase is different because one is using a mapper and the other one has enough with the plain object from the method `toJSON` of a ValueObject.

![correct] Use different useCases for different output format data
```javascript
/* Example of UseCase that need to map the output for Tealium */
class GetSearchParamsFromUrlForTealiumUseCase extends UseCase {
  constructor({ fromSearchParamsVOToTealiumJSON, getSearchParamsFromUrlService }) {
    super()
    this._mapper = fromSearchParamsVOToTealiumJSON
    this._service = getSearchParamsFromUrlService
  }

  async execute ({ url }) {
    const searchParamsValueObject = this._service.execute({ url })
    return this._mapper.map(searchParamsValueObject)
  }
}

/* Example of UseCase that doesn't need to map the output but plain data is enough */
class GetSearchParamsFromUrlUseCase extends UseCase {
  constructor({ getSearchParamsFromUrlService }) {
    super()
    this._service = getSearchParamsFromUrlService
  }

  async execute ({ url }) {
    const searchParamsValueObject = this._service.execute({ url })
    return searchParamsValueObject.toJSON()
  }
}
```

A UseCase could use:

* Services
* Repositories
* Mappers
* ValueObjects
* Entities
