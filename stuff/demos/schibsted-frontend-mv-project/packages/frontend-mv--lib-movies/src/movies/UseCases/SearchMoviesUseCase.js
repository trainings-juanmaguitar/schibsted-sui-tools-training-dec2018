import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({query}) {
    const results = await this._repository.search({query})
    return results.map(movieEntity => movieEntity.toJSON())
  }
}
