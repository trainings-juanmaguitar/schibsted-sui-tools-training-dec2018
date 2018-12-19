import {UseCase} from '@s-ui/domain'

class GetPopularMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({page} = {}) {
    const resultsPopularMovies = await this._repository.popular({page})
    return resultsPopularMovies.toJSON()
  }
}

export default GetPopularMoviesUseCase
