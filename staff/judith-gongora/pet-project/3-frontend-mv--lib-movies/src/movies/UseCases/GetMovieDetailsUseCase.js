import {UseCase} from '@s-ui/domain'

class GetMovieDetailsUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({id}) {
    const movie = await this._repository.getMovieDetails({id})
    return movie.toJSON()
  }
}

export default GetMovieDetailsUseCase
