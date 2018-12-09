import {Mapper} from '@s-ui/domain'

class MoviesMapper extends Mapper {
  constructor({config, movieEntity}) {
    super()
    this._config = config
    this._movieEntity = movieEntity
  }

  map = movieRaw => {
    const {
      id,
      original_title: title,
      overview,
      original_language: language,
      release_date: release,
      poster_path: relativePosterPath
    } = movieRaw

    return this._movieEntity({
      id,
      title,
      overview,
      language,
      release,
      posterPath: `${this._config.get('IMAGE_BASE_URL')}${relativePosterPath}`
    })
  }
}

export default MoviesMapper
