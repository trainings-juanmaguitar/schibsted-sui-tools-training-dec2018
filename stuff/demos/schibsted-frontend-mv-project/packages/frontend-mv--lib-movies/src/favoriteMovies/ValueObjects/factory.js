import MoviesIdsValueObject from './MoviesIdsValueObject'

class FavoriteMoviesValueObjectFactory {
  static moviesIdsValueObject = ids => new MoviesIdsValueObject(ids)
}

export default FavoriteMoviesValueObjectFactory
