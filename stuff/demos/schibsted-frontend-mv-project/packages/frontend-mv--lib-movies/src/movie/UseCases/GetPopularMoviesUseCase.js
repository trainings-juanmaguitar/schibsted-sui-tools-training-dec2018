import {UseCase} from '@s-ui/domain'

class GetPopularMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const resultsPopularMovies = await this._repository.popular()
    return resultsPopularMovies.toJSON()
  }
}

export default GetPopularMoviesUseCase
