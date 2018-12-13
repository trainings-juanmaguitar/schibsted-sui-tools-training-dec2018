import base from './base'

export default class Config {
  constructor(deps) {
    this._config = {
      ...base
    }
  }

  get(key) {
    return this._config[key]
  }

  set(key, value) {
    this._config[key] = value
    return this
  }
}