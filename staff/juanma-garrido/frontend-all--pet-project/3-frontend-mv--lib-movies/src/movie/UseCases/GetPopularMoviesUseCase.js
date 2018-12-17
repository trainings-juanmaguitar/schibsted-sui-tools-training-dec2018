import {UseCase} from '@s-ui/domain'

export default class GetAllMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const results = await this._repository.popular()
    return results.map(movieEntity => movieEntity.toJSON())
  }
}
