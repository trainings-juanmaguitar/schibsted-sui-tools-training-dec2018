# Domain notes


## `Entities` and `ValueObjects` are immutable

`Entities` and `ValueObjects` are immutable so, if we want to _update_ data in them we have to do:

1. Transform it to native object (`.toJSON()`) 
2. Do modifications to data
3. Use the factory to generate a new `Entity` or `ValueObjects`


## `ValueObjects` para listas

los arrays de objetos se traducen en agregados de `ValueObjects` de `Entities`

[Ejemplo definición](https://github.schibsted.io/scmspain/frontend-ma--lib-milanuncios/blob/master/src/categories/ValueObjects/CategoriesListValueObject.js) 

También para gestionar paginaciones y demás


## Arquitectura

- SDK utilizando Arquitectura Hexagonal por capas
- la I (Dependency Inversion Control, Inyección de Dependencias) de SOLID llevada a una arquitectura Frontend
- Uso de nomenclatura DDD para definir las capas
- Ports And adapters
  - Port es la variable del factory donde se le pasa el repositorio
  - Adapter es la versión del repositorio que se le pasa

Capas
```
`Entities`, `ValueObjects` and `Aggregates` 

    ↑

`Repositories` 
  
    ↑

`Services` 

    ↑

`UseCases` (utiliza `Request` y `Response`)

    ↑

`EntryPoint` 


```


## `Request` and `Response`

Elementos `Request` reciben javascript nativo y devuelven elementos del domino
Sirven para filtrar

- [Ejemplo definición](https://github.com/carlosvillu/UABTexthandler/blob/master/src/domain/texts/Requests/EvaluationTextsRequest.js) y [Ejemplo uso](https://github.com/carlosvillu/UABTexthandler/blob/master/src/domain/texts/UseCases/SaveEvaluationTextsUseCase.js)

Elementos `Response` reciben elementos del domino y devuelven javascript nativo (array de objetos)
Se utilizan en la respuesta desde el UseCase

- [Ejemplo definición](https://github.schibsted.io/scmspain/frontend-ma--lib-milanuncios/blob/master/src/stats/Responses/AdStatsResponse.js) y [Ejemplo uso](https://github.schibsted.io/scmspain/frontend-ma--lib-milanuncios/blob/5175ef2efba605e6f307e91902674b2260ab6a61/src/stats/UseCases/GetAdByIdAndStatsUseCase.js#L23)

## Relaciones entre contextos

Las relaciones entre contextos se hacen a través de servicios
Diferentes servicios, de diferentes contextos pueden ser inyectados en un UseCase para resolver un caso concreto

## Agregados

Un agregado es un elemento del dominio que utiliza otras entidades y valueObjects
https://github.schibsted.io/scmspain/frontend-ma--lib-milanuncios/tree/master/src/user/Entities

Ej.- 

```
movieContext
  movieEntity
    idMovie
    title
    description
    yearRelease
    cover

userContext
  userEntity
    idUser
    name
    mail

favoritesContext
  favoriteAggregate
    user<userEntity>
    favorites
      [movie<movieEntity>]
    

rentContext
  rentAggregate
    idRent
    movie<movieEntity>
    user<userEntity>
    datePrestamo
    dateDevolucion
```




