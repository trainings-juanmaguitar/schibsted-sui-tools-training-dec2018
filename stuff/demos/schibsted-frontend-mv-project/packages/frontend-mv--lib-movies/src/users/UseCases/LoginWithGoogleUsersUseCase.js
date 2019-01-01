export default class LoginUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    await this._service.execute()
  }
}
