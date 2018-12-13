import PodcastsRepository from './PodcastsRepository'

class FirebasePodcastsRepository extends PodcastsRepository {
  constructor({config, podcastsEntitiesFactory}) {
    super()
    this._config = config
    this._podcastsEntitiesFactory = podcastsEntitiesFactory
  }
  async all() {
    const db = this._config.get('firebaseDB')
    const podcastsSnapshot = await db.collection('podcasts').get()
    let podcasts = []
    podcastsSnapshot.forEach(doc =>
      podcasts.push(this._podcastsEntitiesFactory(doc.data()))
    )
    return podcasts
  }
}

export default FirebasePodcastsRepository
