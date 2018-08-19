import {Repository} from './Repository'

export class HttpGetShortUrlRepository extends Repository {
  constructor({fetcher, mapper, apiPostUrl}) {
    super()
    this._fetcher = fetcher
    this._mapper = mapper
    this._apiPostUrl = apiPostUrl
  }
  sendUrl(url) {
    return this._fetcher
      .post(this._apiPostUrl, {
        longUrl: url
      })
      .then(response => response.json())
      .then(response => this._mapper.map(response))
  }
}
