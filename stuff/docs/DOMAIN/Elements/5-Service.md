### Service

Class that only has an `execute` method, which will receive a ValueObject with the params needed to perform the operations, requests, and logic and will output a Promise that once resolved, will output a Domain Object. **Services are only called internally in the domain by UseCases and therefore we could call more than one Service from our UseCases.**

Services are not required per se but you MUST create one:
  - If you have different UseCases that will share the exact same behavior but a different final transformation made by a mapper. So you could share the Service between UseCases.
  - If you have to call the service functionality inside your domain. You MUST create a service to do so.

```javascript
class SearchTermSearchService extends Service {
  constructor({ repository }) {
    this._repository = repository
  }

  execute({ termValueObject }) {
    return this._repository.searchTerms({ termValueObject })
  }
}
```
A Service could use:

* Services
* Repositories
* Mappers
* ValueObjects
* Entities
