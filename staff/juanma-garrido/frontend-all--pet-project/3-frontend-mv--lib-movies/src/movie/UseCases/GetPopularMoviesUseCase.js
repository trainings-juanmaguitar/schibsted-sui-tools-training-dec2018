import {UseCase} from '@s-ui/domain'

class GetPopularMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const results = await this._repository.popular()
    return results.map(movieEntity => movieEntity.toJSON())
  }
}

export default GetPopularMoviesUseCase
