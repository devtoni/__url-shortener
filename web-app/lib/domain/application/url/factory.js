import {UrlRepositoriesFactory} from '../../infrastructure/url/Repositories/factory'
import {GetShortUrlAction} from './GetShortUrlAction'

export class UrlActionsFactory {
  static getShortUrlAction = ({config}) =>
    new GetShortUrlAction({
      repository: UrlRepositoriesFactory.httpGetShortUrlRepository({config})
    })
}
