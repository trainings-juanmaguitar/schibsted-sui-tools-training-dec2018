import {UseCase} from '@s-ui/domain'

class SearchMovieDetailsUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({id}) {
    const details = await this._repository.detailsById({id})
    return details
  }
}

export default SearchMovieDetailsUseCase
