import {Entity} from '@s-ui/domain'

class MovieEntity extends Entity {
  constructor({
    id,
    title,
    releaseDate,
    overview,
    language,
    posterPath,
    genres
  }) {
    super()
    this._id = id
    this._title = title
    this._overview = overview
    this._language = language
    this._releaseDate = releaseDate
    this._posterPath = posterPath
    this._genres = genres
  }

  toJSON = () => ({
    id: this._id,
    title: this._title,
    overview: this._overview,
    language: this._language,
    releaseDate: this._releaseDate,
    posterPath: this._posterPath,
    genres: this._genres
  })
}

export default MovieEntity
