import {UrlActionsFactory} from './domain/application/url/factory'
import Config from './config'

const config = new Config()

const actions = {
  get_short_url_action: UrlActionsFactory.getShortUrlAction({config})
}

export class UrlShortenerDomain {
  constructor() {
    this._actions = actions
  }

  get(key) {
    return this._actions[key]
  }
}
