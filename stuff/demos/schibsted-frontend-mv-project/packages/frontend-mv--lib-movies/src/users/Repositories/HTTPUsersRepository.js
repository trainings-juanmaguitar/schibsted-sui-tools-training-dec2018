/* eslint-disable */
import to from 'await-to-js'
import UsersRepository from './UsersRepository'

class HTTPUsersRepository extends UsersRepository {
  constructor({config, log, fetcher, userEntityFactory} = {}) {
    super()

    this._config = config
    this._log = log
    this._userEntityFactory = userEntityFactory
    this._fetcher = fetcher
  }

  async current(session) {
    this._log(`Getting CURRENT user`)
    if (session) {
      const {token} = session.toJSON()
      const host = this._config.get('FIREBASE_API_URL')
      const url = `${host}/users/current/`
      const options = {headers: {Authorization: `Bearer ${token}`}}

      const [err, response] = await to(this._fetcher.get(url, options))
      if (err) {
        console.log(err)
        return
      }
      const {data: userDB} = response 
      return this._userEntityFactory(userDB)
    }
  }

  logout() {
    this._log(`LOGOUT USER`)
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}

export default HTTPUsersRepository
