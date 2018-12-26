export default class LoginUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    const userEntity = await this._service.execute()
    return userEntity.toJSON()
  }
}
