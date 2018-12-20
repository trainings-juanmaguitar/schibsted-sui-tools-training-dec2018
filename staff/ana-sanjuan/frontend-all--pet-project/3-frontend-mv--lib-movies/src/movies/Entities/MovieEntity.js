import {Entity} from '@s-ui/domain'

class MovieEntity extends Entity {
  constructor({id, title, overview, language, posterPath}) {
    super()
    this._id = id
    this._title = title
    this._overview = overview
    this._language = language
    this._posterPath = posterPath
  }

  toJSON = () => ({
    id: this._id,
    title: this._title,
    overview: this._overview,
    language: this._language,
    posterPath: this._posterPath
  })
}

export default MovieEntity
