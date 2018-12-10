import PodcastsEntitiesFactory from '../Entities/factory'

import FirebasePodcastsRepository from './FirebasePodcastsRepository'

class PodcastsRepositoriesFactory {
  static firebasePodcastsRepository = ({config}) =>
    new FirebasePodcastsRepository({
      config,
      podcastsEntitiesFactory: PodcastsEntitiesFactory.podcastEntity
    })
}

export default PodcastsRepositoriesFactory
