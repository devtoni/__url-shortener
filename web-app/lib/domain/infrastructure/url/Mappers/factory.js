import {UrlValueObjectsFactory} from '../../../model/url/factory'
import {GetShortUrlMapper} from './GetShortUrlMapper'
export class UrlMappersFactory {
  static getShortUrlMapper() {
    return new GetShortUrlMapper({
      urlValueObject: UrlValueObjectsFactory.urlValueObject
    })
  }
}
