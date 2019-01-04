import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
class LoginUsersUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    await this._repository.loginWithGoogle()
  }
}

export default LoginUsersUseCase
