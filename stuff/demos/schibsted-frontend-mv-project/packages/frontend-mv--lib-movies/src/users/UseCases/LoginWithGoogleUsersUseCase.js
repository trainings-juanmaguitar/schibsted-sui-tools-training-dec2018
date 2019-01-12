import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class LoginUsersUseCase extends UseCase {
  constructor({service} = {}) {
    super()
    this._service = service
  }

  async execute() {
    await this._service.execute()
  }
}

export default LoginUsersUseCase
