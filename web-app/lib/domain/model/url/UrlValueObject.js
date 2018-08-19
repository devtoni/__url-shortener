export class UrlValueObject {
  constructor({url}) {
    this._url = url
  }
  toJSON() {
    return {
      url: this._url
    }
  }
}
