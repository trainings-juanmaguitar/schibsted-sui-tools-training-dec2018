import base from './base'

import test from './environments/test'
import development from './environments/development'
import production from './environments/production'
import preproduction from './environments/preproduction'

const envConfig = {
  development,
  preproduction,
  production,
  test
}

const environment = process.env.NODE_ENV

export default class Config {
  constructor() {
    this._config = {
      ...base,
      ...envConfig[environment]
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    this._config[key] = value
    return this
  }
}
