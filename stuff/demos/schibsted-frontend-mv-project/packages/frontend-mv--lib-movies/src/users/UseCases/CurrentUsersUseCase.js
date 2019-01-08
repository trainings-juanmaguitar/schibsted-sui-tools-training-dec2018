import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class CurrentUsersUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const userEntity = await this._repository.current()
    return userEntity && userEntity.toJSON()
  }
}

export default CurrentUsersUseCase
