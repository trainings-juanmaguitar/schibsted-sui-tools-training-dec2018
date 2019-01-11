import {Service} from '@s-ui/domain'

export default class LogoutUsersService extends Service {
  /**
   * @constructor
   * @param {Object} deps
   * @param {CookiesUsersRepository} deps.cookiesRepository
   * @param {StorageUsersRepository} deps.storageRepository
   */
  constructor({cookiesRepository, storageRepository}) {
    super()

    this._cookiesRepository = cookiesRepository
    this._storageRepository = storageRepository
  }

  async execute() {
    this._storageRepository.logout()
    this._cookiesRepository.logout()
  }
}
