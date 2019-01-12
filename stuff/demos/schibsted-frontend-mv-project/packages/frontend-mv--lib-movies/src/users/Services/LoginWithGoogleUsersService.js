import {Service} from '@s-ui/domain'

class CurrentUsersService extends Service {
  /**
   * @constructor
   * @param {Object} deps
   * @param {CookiesUsersRepository} deps.cookiesRepository
   * @param {StorageUsersRepository} deps.storageRepository
   * @param {FireBaseUsersRepository} deps.fireBaseRepository
   */
  constructor({cookiesRepository, storageRepository, fireBaseRepository}) {
    super()

    this._cookiesRepository = cookiesRepository
    this._storageRepository = storageRepository
    this._fireBaseRepository = fireBaseRepository
  }

  /**
   * @return {Promise<UserEntity>}
   */
  async execute() {
    const userEntity = await this._fireBaseRepository.loginWithGoogle()
    const user = userEntity.toJSON()
    this._storageRepository.loginPersist({user})
    const {token} = user
    this._cookiesRepository.loginPersist({token})
    return userEntity
  }
}

export default CurrentUsersService
