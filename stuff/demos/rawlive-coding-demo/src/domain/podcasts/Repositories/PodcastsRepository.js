import {Repository} from '@s-ui/domain'

class PodcastsRepository extends Repository {
  all() {
    throw new Error('[PodcastsRepository#all] mandatory')
  }
}

export default PodcastsRepository
