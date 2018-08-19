import fetch from 'isomorphic-unfetch'

export class HttpFetcher {
  constructor() {
    if (typeof window === 'undefined') {
      this._fetch = fetch.bind()
    } else {
      this._fetch = window.fetch.bind(window)
    }
  }
  post(url, params, options) {
    return this._fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    })
  }
}
