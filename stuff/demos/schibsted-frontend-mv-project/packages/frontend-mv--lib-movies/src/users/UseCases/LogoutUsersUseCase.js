import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class LogoutUsersUseCase extends UseCase {
  constructor({service} = {}) {
    super()
    this._service = service
  }

  execute() {
    return this._service.execute()
  }
}

export default LogoutUsersUseCase
