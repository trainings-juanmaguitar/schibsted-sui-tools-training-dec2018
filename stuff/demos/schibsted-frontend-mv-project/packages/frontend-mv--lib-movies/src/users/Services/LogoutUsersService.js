export default class LogoutUsersService {
  constructor({cookieRepository} = {}) {
    this._cookieRepository = cookieRepository
  }

  async execute() {
    await this._cookieRepository.logout()
  }
}
