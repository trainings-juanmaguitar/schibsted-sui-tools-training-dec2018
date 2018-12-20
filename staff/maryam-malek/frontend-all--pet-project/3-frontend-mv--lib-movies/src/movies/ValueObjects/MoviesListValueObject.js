import {ValueObject} from '@s-ui/domain'

class MoviesListValueObject extends ValueObject {
  constructor({movies, totalPages, totalResults, actualPage}) {
    super()
    this.movies = movies
    this.totalPages = totalPages
    this.totalResults = totalResults
    this.actualPage = actualPage
  }
  toJSON = () => ({
    movies: this._movies,
    totalPages: this._totalPages,
    totalResults: this._totalResults,
    actualPage: this._actualPage
  })
}

export default MoviesListValueObject
