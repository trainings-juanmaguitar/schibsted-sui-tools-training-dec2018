import {UseCase} from '@s-ui/domain'
import {streamify} from '@s-ui/decorators'

@streamify('execute')
class AddFavoriteMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({id}) {
    await this._repository.removeFavoriteMovie({id})
  }
}

export default AddFavoriteMoviesUseCase
