import * as base from './base'

export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor() {
    this._config = Object.assign({}, base)
  }

  get(key) {
    return this._config[key]
  }

  set(key, value) {
    this._config[key] = value
    return this
  }
}
