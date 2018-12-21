import PhotoRepository from './PhotoRepository.js'

class HTTPPhotoRepository extends PhotoRepository {
  constructor({config, fetcher, photoEntityFactory}) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._photoEntityFactory = photoEntityFactory
  }
  async all() {
    const host = this._config.get('API_BASE_URL')
    const url = `${host}/photos`

    const {data: results} = await this._fetcher.get(url)

    return results.map(this._photoEntityFactory)
  }
}

export default HTTPPhotoRepository
