import Config from '../config'
import nock from 'nock'
import {UrlActionsFactory} from '../domain/application/url/factory'

const config = new Config()

describe('GetShortUrlActionSpec', () => {
  const getShortUrlAction = UrlActionsFactory.getShortUrlAction({config})

  describe('when a correct url argument is passed...', () => {
    beforeEach(() => {
      nock('https://pya70tmx5a.execute-api.eu-west-1.amazonaws.com')
        .post('/dev/api/url', {
          longUrl: 'https://www.example.com/long_url'
        })
        .reply(200, {data: {url: 'http://devtoni.com..'}})
    })

    it('should return an URL when argument is not correct', async () => {
      getShortUrlAction.on(getShortUrlAction.events.SUCCESS, url => {
        expect(url).toMatchObject({url: 'http://devtoni.com..'})
      })
      getShortUrlAction.execute({
        url: 'https://www.example.com/long_url'
      })
    })
  })

  describe('when a wrong url argument is passed..', () => {
    beforeEach(() => {
      nock('https://pya70tmx5a.execute-api.eu-west-1.amazonaws.com')
        .post('/dev/api/url', {
          longUrl: 'pepe'
        })
        .reply(200, {data: {url: ''}})
    })

    it('should return an empty URL when argument is not correct', async () => {
      getShortUrlAction.on(getShortUrlAction.events.SUCCESS, url => {
        expect(url).toMatchObject({url: ''})
      })
      getShortUrlAction.execute({url: 'pepe'})
    })
  })
})
