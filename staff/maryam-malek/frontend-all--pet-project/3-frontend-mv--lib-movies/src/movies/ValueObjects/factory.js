import MoviesListValueObject from './MoviesListValueObject'

class MoviesListValueObjectFactory {
  static moviesListValueObject = list => new MoviesListValueObject(list)
}

export default MoviesListValueObjectFactory
