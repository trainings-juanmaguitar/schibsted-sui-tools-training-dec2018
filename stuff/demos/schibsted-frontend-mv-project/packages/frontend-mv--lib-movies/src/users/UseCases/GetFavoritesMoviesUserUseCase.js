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
    const userEntity = await this._repository.current({cookies})
    return userEntity && userEntity.toJSON()
  }
}

export default GetFavoritesMoviesUserUseCase
