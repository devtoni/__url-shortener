const {expect} = require('chai')
const request = require('supertest')
const nock = require('nock')
const serverApplication = require('../../src/interface/http/server')

describe('controller for URL context', () => {

  const longUrl = 'https://www.coches.net/isAwesome'
  const OLD_ENV = process.env;

  const expectedResult = {
    shortLink: 'https://devtoni.page.link/?link..'
  }

  const requestBody = {
    body: JSON.stringify({longDynamicLink: `https://devtoni.page.link/?link=${longUrl}`})
  }

  beforeEach(() => {
    process.env.FIREBASE_DYNAMIC_LINKS_API_KEY = 'apiKey'
    process.env = {
      ...OLD_ENV
    };
  })

  afterEach(() => {
    process.env = OLD_ENV;
  })

  it('should return the expected output when request is Ok', done => {

    nock('https://firebasedynamiclinks.googleapis.com/v1')
      .post('/shortLinks?key=apiKey', requestBody.body)
      .reply(200, expectedResult)

    request(serverApplication())
      .post('/api/url')
      .send({longUrl})
      .expect(200)
      .then(response => {
        expect(parsedResponse(response)).to.have.deep.property('status', 'ok')
        expect(parsedResponse(response)).to.have.deep.property('code', 200)
        expect(parsedResponse(response)).to.have.deep.property('data', {url: 'https://devtoni.page.link/?link..'})
        done()
      })
  })

  it('should return the expected output when request is Ko', done => {

    nock('https://firebasedynamiclinks.googleapis.com/v1')
      .post('/shortLinks?key=apiKey', requestBody.body)
      .reply(400, new Error('Bad Request'))

    request(serverApplication())
      .post('/api/url')
      .send({longUrl})
      .expect(400)
      .then(response => {
        expect(parsedResponse(response)).to.have.deep.property('status', 'ko')
        expect(parsedResponse(response)).to.have.deep.property('code', 400)
        expect(parsedResponse(response)).to.have.deep.property('error', 'Bad Request')
        done()
      })
      .catch(done)
  })
})

const parsedResponse = (response) => {
  try {
    return JSON.parse(response.text)
  } catch (e) { return false }
}