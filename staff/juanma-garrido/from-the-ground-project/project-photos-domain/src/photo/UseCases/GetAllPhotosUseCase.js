/* eslint-disable */
import {UseCase} from '@s-ui/domain'

class GetAllPhotosUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute() {
    const photos = await this._repository.all()
    return photos.map(photo => photo.toJSON())
  }
}

export default GetAllPhotosUseCase
