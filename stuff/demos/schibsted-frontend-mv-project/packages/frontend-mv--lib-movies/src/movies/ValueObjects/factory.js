import MoviesListValueObject from './MoviesListValueObject'

class MoviesValueObjectFactory {
  static moviesListValueObject = rawValueObject =>
    new MoviesListValueObject(rawValueObject)
}

export default MoviesValueObjectFactory
