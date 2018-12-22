import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({query, page} = {}) {
    const resultsSearchMovies = await this._repository.search({query, page})
    return resultsSearchMovies.toJSON()
  }
}
