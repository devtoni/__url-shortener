import {Operation} from '../Operation'

export class GetShortUrlAction extends Operation {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({url = ''}) {
    const {SUCCESS, ERROR} = this.events
    try {
      const urlValueObject = await this._repository.sendUrl(url)
      this.emit(SUCCESS, urlValueObject.toJSON())
    } catch (error) {
      this.emit(ERROR, {error})
    }
  }
}
