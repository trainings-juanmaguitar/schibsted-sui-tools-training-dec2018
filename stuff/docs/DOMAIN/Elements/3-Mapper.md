### Mapper

Mappers should implement a `map()` method. It's not a static method so you have to instantiate the class previously on the factory. **The mission of this function is to transform the input to another structure or the same with some changes**. In this process, the mapper **MUST NOT mutate its parameters but only read them** in order to guarantee the stability of the general state of our domain. The parameter received by the map method should not be named, its contract of parameters should follow the same contract as the Array.prototype.map.

Some transformations that you could do in a `map` could be:

- **From JSON to a Entity/ValueObject**: This transformation could be done with the parameters that you get in the UseCase and with the response that we get inside repositories. So we normalize the entry params that we get in the useCase and transform the external response of the domain made on our repositories to Domain Objects in order to be able to work with them inside the domain.

- **From Entity/ValueObject to Entity/ValueObject**: This transformation uses a DomainObject to create another without mutating it. That's the most typical usage of the Mapper on our domain. For example, we could have a `PropertyEntity` and we could want to map the features of the Entity to a `FeaturesValueObject`. For that, we will use a Mapper.

- **From Entity/ValueObject to JSON**: This transformation uses a DomainObject to create a response of an UseCase. So you could use a DomainObject and the toJSON method along with its introspective methods in order to transform the data, use the config to create new values and do some calculations to have a JSON output with your needed scheme. For example, we could have a `RealEstateEntity` and we could want to map it to a JSON that will be returned in the `get_real_estate_detail_use_case`.

So, you should always use a mapper in order to make transformations. **The only reason to not do that it's only for doing a reassignment of named keys**. For example, when you have to adapt the keys of an Entity to be used as parameters by a fetcher.

#### Important!!!

The code definition of the map function MUST BE an arrow function to dismiss missing context errors and will make UNABLE any instance property call if this is called from Array.prototype.map:

![incorrect] Do the public function declaration without an arrow function.

```javascript
import { Mapper } from '@s-ui/domain'

export default class HTTPAdsRepositorySearchToAdsEntityMapper extends Mapper {
  constructor ({adEntityFactory}) {
    super()
    this._adEntityFactory = adEntityFactory
  }

  // BAD EXAMPLE
  map(httpAdsRepositorySearchResponse) {
    const { adId, adName, advertiserId } = httpAdsRepositorySearchResponse
    // The next line will fail with an Error 'this' is undefined
    // if you pass directly this map method as a parameter of an Array.prototype.map
    // for example: arrayOfResponses.map(hTTPAdsRepositorySearchToAdsEntityMapper.map)
    return this._adEntityFactory({
      id: adId,
      title: adName,
      sellerId: advertiserId
    })
  }
}
```

![correct] Do the public function declaration with the arrow function to preserve context.


```javascript
import { Mapper } from '@s-ui/domain'

export default class HTTPAdsRepositorySearchToAdsEntityMapper extends Mapper {
  constructor ({adEntityFactory}) {
    super()
    this._adEntityFactory = adEntityFactory
  }

  // GOOD EXAMPLE
  map = (httpAdsRepositorySearchResponse) => {
    const { adId, adName, advertiserId } = httpAdsRepositorySearchResponse
    // The next line will work as we are preserving the context of our parent wrapper
    // for example: arrayOfResponses.map(hTTPAdsRepositorySearchToAdsEntityMapper.map)
    return this._adEntityFactory({
      id: adId,
      title: adName,
      sellerId: advertiserId
    })
  }
}
```

