import {Service} from '@s-ui/domain'

export default class LogoutUsersService extends Service {
  /**
   * @constructor
   * @param {Object} deps
   * @param {HTTPUsersRepository} deps.httpRepository
   * @param {StorageUsersRepository} deps.storageRepository
   */
  constructor({httpRepository, storageRepository, config}) {
    super()
    this._config = config
    this._httpRepository = httpRepository
    this._storageRepository = storageRepository
  }

  async execute() {
    const isClient = this._config.get('isClient')
    return isClient
      ? this._storageRepository.current()
      : this._httpRepository.current()
  }
}
