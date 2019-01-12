import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class CurrentUsersUseCase extends UseCase {
  constructor({service} = {}) {
    super()
    this._service = service
  }

  async execute() {
    const userEntity = await this._service.execute()
    return userEntity && userEntity.toJSON()
  }
}

export default CurrentUsersUseCase
