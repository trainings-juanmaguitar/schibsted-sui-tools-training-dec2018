import PodcastsRepositoryFactory from '../Repositories/factory'

import ListPodcastsUseCase from './ListPodcastsUseCase'

class PodcastsUseCasesFactory {
  static listPodcastsUseCase = ({config}) =>
    new ListPodcastsUseCase({
      repository: PodcastsRepositoryFactory.firebasePodcastsRepository({config})
    })
}

export default PodcastsUseCasesFactory
