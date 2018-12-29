export default class UsersRepository {
  current() {
    throw Error('[UsersRepository#current] must be implemented')
  }

  login() {
    throw Error('[UsersRepository#login] must be implemented')
  }

  loginWithGoogle() {
    throw Error('[UsersRepository#loginWithGoogle] must be implemented')
  }

  logout() {
    throw Error('[UsersRepository#logout] must be implemented')
  }
}
