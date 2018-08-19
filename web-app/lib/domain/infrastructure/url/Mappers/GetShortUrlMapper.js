export class GetShortUrlMapper {
  constructor({urlValueObject}) {
    this._urlValueObject = urlValueObject
  }
  map({data: {url = ''} = {}} = {}) {
    return this._urlValueObject({url})
  }
}
