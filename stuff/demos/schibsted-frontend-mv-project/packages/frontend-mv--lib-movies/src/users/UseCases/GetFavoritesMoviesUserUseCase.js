import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class GetFavoritesMoviesUserUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({cookies}) {
    const favoritesMovies = await this._repository.favoriteMovies({cookies})
    return favoritesMovies && favoritesMovies.toJSON()
  }
}

export default GetFavoritesMoviesUserUseCase
