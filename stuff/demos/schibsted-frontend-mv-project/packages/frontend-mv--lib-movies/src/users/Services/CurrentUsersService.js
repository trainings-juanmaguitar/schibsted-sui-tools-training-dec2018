export default class CurrentUsersService {
  constructor({firebaseRepository, cookieRepository, httpRepository} = {}) {
    this._firebaseRepository = firebaseRepository
    this._cookieRepository = cookieRepository
    this._httpRepository = httpRepository
  }

  async execute() {
    const currentSession = await this._cookieRepository.current()
    console.log(currentSession)
    return this._httpRepository.current(currentSession)
  }
}
