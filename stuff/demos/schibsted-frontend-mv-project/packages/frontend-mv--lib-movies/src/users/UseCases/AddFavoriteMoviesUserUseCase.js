import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class GetFavoritesMoviesUserUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({id}) {
    const favoritesMovies = await this._repository.addFavoriteMovie({id})
    return favoritesMovies && favoritesMovies.toJSON()
  }
}

export default GetFavoritesMoviesUserUseCase
