## Folder structure

Please, find a complete example of **folder structure for your domain**. In brackets, you've the names that you have to fill with the concept wrapped.

```
package.json
/src
  /config
  /logger
  /common (Shared Entities and ValueObjects only)
    /[context]
      factory.js
      [context]Entity.js
      [context]ValueObject.js
    /[context2]
      factory.js
      [context2]ValueObject.js
  /[feature]
    /UseCases
      factory.js
      [Action][Feature]UseCase.js
    /Entities
      factory.js
      [Entity]Entity.js
    /ValueObjects
      factory.js
      [ValueObject][Context]ValueObject.js
    /Repositories
      factory.js
      [Context]Repository.js // interface for all repositories
      [Repository][Context]Repository.js
    /Services
      factory.js
      [Action][Context]Service.js
    /Mappers
      factory.js
      [InputDomainObject]to[OutputDomainObject][Context]Mapper.js
      [InputResponseRepository][MethodRepository]to[OutputDomainObject][Context]Mapper.js
/test
  /fixtures
  /[feature]
    [Action][Feature]UseCaseSpec.js
    [Entity]EntitySpec.js
    [ValueObject]ValueObjectSpec.js


```



In case you're wondering, we've prepared a real example in order to guide you on a correct usage of the folder structure.

```
package.json
/src
  /config
  /logger
  /common
    /avatar
      factory.js
      AvatarValueObject.js
  /user
    /UseCases
      factory.js
      CreateUserUseCase.js
    /Entities
      factory.js
      UserEntity.js
    /ValueObjects
      factory.js
      AgeUserValueObject.js
      CreateUserParamsValueObject.js
      ListOfUsersValueObject.js
    /Repositories
      factory.js
      UserRepository.js
      HTTPUserRepository.js
    /Services
      factory.js
      CreateUserService.js
    /Mappers
      factory.js
      UserEntityToUserEntityWithUrlProfileUserMapper.js
      HTTPUserRepositoryGetUserResponseToUserEntityMapper.js
/test
  /user
  	CreateUserUseCaseSpec.js
  	UserEntitySpec.js
  	AgeUserValueObjectSpec.js
  	CreateUserParamsValueObjectSpec.js
  	ListOfUsersValueObjectSpec.js

```

