import MoviesListValueObject from './MoviesListValueObject'

class MoviesListValueObjectFactory {
  static moviesListValueObject = rawValueObject =>
    new MoviesListValueObject(rawValueObject)
}

export default MoviesListValueObjectFactory
