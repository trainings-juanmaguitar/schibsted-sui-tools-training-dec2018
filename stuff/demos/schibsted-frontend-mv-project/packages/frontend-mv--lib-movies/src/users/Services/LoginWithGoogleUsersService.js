export default class LoginUsersService {
  constructor({firebaseRepository, cookieRepository, httpRepository} = {}) {
    this._firebaseRepository = firebaseRepository
    this._cookieRepository = cookieRepository
    this._httpRepository = httpRepository
  }

  async execute() {
    const sessionEntity = await this._firebaseRepository.loginWithGoogle()
    this._cookieRepository.login(sessionEntity)
  }
}
