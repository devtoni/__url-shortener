const getShortUrl = require('./getShortUrl')
const urlRepositoryFactory = require('../../infrastructure/url/repositories/factory')
module.exports = () => ({
  getShortUrlFactory() {
    return getShortUrl({
      httpRepository: urlRepositoryFactory().httpRepositoryFactory(),
      urlValueObject: require('../../model/url')
    })
  }
})
