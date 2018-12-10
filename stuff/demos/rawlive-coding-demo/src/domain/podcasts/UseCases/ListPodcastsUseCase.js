import {UseCase} from '@s-ui/domain'

class ListPodcastsUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute() {
    const podcastsEntities = await this._repository.all()
    return podcastsEntities.map(podcastEntity => podcastEntity.toJSON())
  }
}

export default ListPodcastsUseCase
