import {UseCase} from '@s-ui/domain'

class GetFavoritesMoviesUseCase extends UseCase {
  constructor({service} = {}) {
    super()
    this._service = service
  }

  async execute() {
    const favoritesMovies = await this._service.execute()
    return favoritesMovies && favoritesMovies.toJSON()
  }
}

export default GetFavoritesMoviesUseCase
