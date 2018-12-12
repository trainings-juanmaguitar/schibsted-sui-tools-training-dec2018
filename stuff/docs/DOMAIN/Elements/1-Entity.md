### Entity

Entities represent a business concept which complies with 2 traits:
- It's identified by an identifier or id.
- Its values evolve over time: an order which amount changes over time, a user which address changes over time, etc. But the Entity represents the same object while the id is the same.

Then, two Entities will be equal if they have the same identifier. Besides that, the entity could have valuable info.

An example of Entity could be a UserEntity, which `userId` property is its unique identifier. So, two UserEntities would be equal if they have the same `userId`, even if their info differs as a User, they could have different data historically. For example, they could change its `useEmail` property but it will be still the same user.

An Entity must implement at least two methods:
* `constructor()`, that instantiate the entity setting its properties
* `toJSON()`, that returns a plain representation of the entity. This plain object is used by the factory of the entity for being able to create the same Entity.

You could also create useful methods that can help your work in the domain.

```javascript
class UserEntity extends Entity {
  constructor({ id, name, age, email, avatar, url }) {
    this._id = id
    this._name = name
    this._age = age
    this._email = email
    this._avatar = avatar
    this._url = url
  }

  isAdult() {
    return this._age >= 18
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      age: this._age,
      url: this._url,
      ...this._email.toJSON(), // we do that as the email stored is a ValueObject
      ...this._avatar.toJSON()  // we do that as the avatar stored is a ValueObject
    }
  }
}
```