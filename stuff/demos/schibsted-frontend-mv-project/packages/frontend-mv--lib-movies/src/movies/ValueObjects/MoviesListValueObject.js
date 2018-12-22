import {ValueObject} from '@s-ui/domain'

/**
 * @export
 * @class MoviesListValueObject
 * @extends {ValueObject}
 * @param {array} moviesList - A list of movies entities
 */
class MoviesListValueObject extends ValueObject {
  /**
   * @param {Number} page
   * @param {Number} totalResults
   * @param {Number} totalPages
   * @param {Array<MovieEntity>} movies
   */
  constructor({page, totalResults, totalPages, movies}) {
    super()
    this._page = page
    this._totalResults = totalResults
    this._totalPages = totalPages
    this._movies = movies
  }

  toJSON = () => ({
    page: this._page,
    totalResults: this._totalResults,
    totalPages: this._totalPages,
    movies: this._movies.map(movie => movie.toJSON())
  })
}

export default MoviesListValueObject
