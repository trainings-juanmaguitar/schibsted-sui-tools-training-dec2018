import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class LogoutUsersUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository.logout()
  }
}

export default LogoutUsersUseCase
