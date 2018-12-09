### Aggregates of entities or value objects manipulation.

In the following example we will see a real case of Object composition, where we solve these questions:
- Who has the responsability of doing this Object composition?
- Why?
- What are we generating?

#### Who has the responsability of doing this Object composition?
The Factory has full responsability of doing the Object composition as you can see in the example at the bottom. This statement includes Entities and Value object Factories.

#### Why?
Doing Object composition this way, all domain's logic is located in the same place. Otherwise we might be repeating the same code elsewhere.
An example of this duplication is adding this logic inside a Mapper. In order to reuse it to build a DTO in some other site the code must be copy & pasted.

#### What are we generating?
In this case we are generating an **object aggregate**. The difference between an aggregate and a plain object is in its content:
- A plain object will contains properties but never will contain an entity or value object as aggregate's do.

Here is the example of entity factory:

![correct]

```javascript
import CategoryEntity from './CategoryEntity'

class CategoryEntitiesFactory {
  static categoryEntity = rawEntity =>
    new CategoryEntity({
      ...rawEntity,
      children: rawEntity.children.map(CategoryEntitiesFactory.categoryEntity)
    })
}

export default CategoryEntitiesFactory

```

Here is the example of mapper:

```javascript
import {Mapper} from '@s-ui/domain'

class CategoriesMapper extends Mapper {
  constructor({config, categoryEntity}) {
    super()
    this._config = config
    this._categoryEntity = categoryEntity
  }

  map = category =>
    this._categoryEntity({
      ...category,
      page: this._config.get('CATEGORIES_ROUTES')[this.culture][category.id],
      children: category.children.map(this.map).map(c => c.toJSON())
    })
}

export default CategoriesMapper
```

![incorrect]

Here is the example of entity factory:

```javascript
import CategoryEntity from './CategoryEntity'

class CategoryEntitiesFactory {
  static categoryEntity = rawEntity => new CategoryEntity(rawEntity)
}

export default CategoryEntitiesFactory
```

Here is the example of mapper:

```javascript
import {Mapper} from '@s-ui/domain'

class CategoriesMapper extends Mapper {
  constructor({config, categoryEntity}) {
    super()
    this._config = config
    this._categoryEntity = categoryEntity
  }

  map = category =>
    this._categoryEntity({
      ...category,
      page: this._config.get('CATEGORIES_ROUTES')[this.culture][category.id],
      children: category.children.map(this.map)
    })
}

export default CategoriesMapper
```

[correct]:https://img.shields.io/badge/-OK-green.svg
[incorrect]:https://img.shields.io/badge/-KO-red.svg