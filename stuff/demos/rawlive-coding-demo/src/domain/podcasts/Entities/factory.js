import PodcastEntity from './PodcastEntity'

class PodcastsEntitiesFactory {
  static podcastEntity = podcast => new PodcastEntity(podcast)
}

export default PodcastsEntitiesFactory
