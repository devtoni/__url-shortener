import {UrlValueObject} from './UrlValueObject'
export class UrlValueObjectsFactory {
  static urlValueObject({url}) {
    return new UrlValueObject({url})
  }
}
