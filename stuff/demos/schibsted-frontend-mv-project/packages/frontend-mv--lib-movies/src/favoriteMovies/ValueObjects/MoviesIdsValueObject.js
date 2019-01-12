import {ValueObject} from '@s-ui/domain'

class MoviesIdsValueObject extends ValueObject {
  constructor({ids}) {
    super()
    this._ids = ids
  }

  toJSON = () => ({
    ids: this._ids
  })
}

export default MoviesIdsValueObject
