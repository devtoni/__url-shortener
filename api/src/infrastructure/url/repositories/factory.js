const httpRepository = require('./httpRepository')
const fetcher = require('../../services/fetcher')

module.exports = () => ({
  httpRepositoryFactory() {
    return httpRepository({fetcher})
  }
})
