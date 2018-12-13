### ValueObjects and Entities observations

- MUST NOT make transformations. If you need to make a transformation, use a mapper instead.
- MUST `toJSON` method return, at least, the input of the factory of each Domain Object in order to create the same Domain Object.
- MUST NOT have getters nor setters, as we expect our Domain Object to be immutable.
- MUST be immutable Domain Objects. If you have to change its data, you MUST use the method `toJSON`, change the needed data, and create another Domain Object.
- MUST destructure array and plain objects in order to avoid mutating the content of these properties.
- COULD have introspective methods to extract info and data from the Domain Object in different ways but MUST NOT mutate the Domain Object.

An example with some of the observations made:

```javascript
class UserEntity extends Entity {
  constructor({ id, name, listOfFavorites, skills, followers }) {
    super()

    this._id = id
    this._name = name
    this._gender = gender
    this._listOfFavorites = listOfFavorites // this is an array of strings
    this._skills = skills // this is an object -> { Javascript: "1 of 10", Math: "3" }
    this._followers = followers // this is a ValueObject -> FollowersValueObject
  }

  // introspective method to get info from the Domain Object
  getName() {
    return this._name
  }

  // introspective method to know if the User has followers
  hasFollowers() {
    // as followers is a ValueObject, you could use its methods to check
    // if the User has followers
    return this._followers.count() > 0
  }

  toJSON() {
    return {
      id: this._id,
      listOfFavorites: [...this._listOfFavorites],
      skills: { ...this._skills },
      ...this._followers.toJSON()
    }

```

