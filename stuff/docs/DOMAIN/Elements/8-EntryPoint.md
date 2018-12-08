### EntryPoint

The **EntryPoint** of the domain is a class that receives your **config**. To create it, we use the **EntryPointFactory** provided by [@s-ui/domain] package which needs an object that follows the [Minimal API Surface](https://www.youtube.com/watch?time_continue=99&v=4anAwXYqLG8) pattern with all the **UseCases** of our domain.
The **UseCases** are passed as an object where each key is the name of the UseCase in [snake_case](https://en.wikipedia.org/wiki/Snake_case) that we want to offer to be used and the value is the factory of the same UseCase.

This EntryPoint should not be considered as a singleton, otherwise, the config would be shared among all the requests.

```javascript
import { EntryPointFactory } from '@s-ui/domain'
import UserUseCasesFactory from './user/UseCases/factory'
import SearchUseCasesFactory from './search/UseCases/factory'

// useCases is an object with a key with the name of the use case
// and the value is the factory of the useCase
const useCases = {
  'get_current_user': UserFactory.getCurrentUserUseCase,
  'list_products_search': SearchFactory.listProductsSearchUseCase
}

// config could be a simple object or a more complicated
// creation like a class Config with methods to get and set
const config = {
  SEARCH_ENDPOINT: 'http://api.url.com/detail'
}

// create the EntryPoint
const EntryPoint = EntryPointFactory({ useCases })
// create a instantiate everytime you need it
const domain = new EntryPoint({ config })
```

----