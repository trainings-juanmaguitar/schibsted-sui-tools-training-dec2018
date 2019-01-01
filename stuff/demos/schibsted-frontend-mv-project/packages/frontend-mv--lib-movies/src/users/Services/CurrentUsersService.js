export default class CurrentUsersService {
  constructor({firebaseRepository, cookieRepository, httpRepository} = {}) {
    this._firebaseRepository = firebaseRepository
    this._cookieRepository = cookieRepository
    this._httpRepository = httpRepository
  }

  async execute({cookies}) {
    const currentSession = await this._cookieRepository.current({cookies})
    return this._httpRepository.current(currentSession)
  }
}
