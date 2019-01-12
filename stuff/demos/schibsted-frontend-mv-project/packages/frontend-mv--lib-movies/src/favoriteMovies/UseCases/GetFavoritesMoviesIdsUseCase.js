import {UseCase} from '@s-ui/domain'

class GetIdsFavoriteMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const idsFavoritesMovies = await this._repository.getIds()
    return idsFavoritesMovies && idsFavoritesMovies.toJSON()
  }
}

export default GetIdsFavoriteMoviesUseCase
