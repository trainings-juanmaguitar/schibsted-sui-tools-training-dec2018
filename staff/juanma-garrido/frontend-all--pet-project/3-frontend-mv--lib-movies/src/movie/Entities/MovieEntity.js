import {Entity} from '@s-ui/domain'

/**
 * @export
 * @class MovieEntity
 * @extends {Entity}
 */
export default class MovieEntity extends Entity {
  /**
   * @param {Number} id
   * @param {String} title
   * @param {String} release
   * @param {String} overview
   * @param {String} language
   * @param {String} posterPath
   */
  constructor({id, title, release, overview, language, posterPath}) {
    super()
    this._id = id
    this._title = title
    this._overview = overview
    this._language = language
    this._release = release
    this._posterPath = posterPath
  }

  toJSON = () => ({
    id: this._id,
    title: this._title,
    overview: this._overview,
    language: this._language,
    release: this._release,
    posterPath: this._posterPath
  })
}
