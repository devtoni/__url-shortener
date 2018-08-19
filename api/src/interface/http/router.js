const { Router } = require('express')
const urlController = require('./controller/url')
module.exports = () => {
  const router = Router()
  router.use('/api/url', urlController())
  return router
}
