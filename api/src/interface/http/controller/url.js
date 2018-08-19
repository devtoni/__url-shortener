const { Router } = require('express')

const urlFactory = require('../../../application/url/factory')

module.exports = () => {
  const router = Router()
  router.post('/', (req, res) => {
    const { longUrl = '' } = req.body

    urlFactory()
      .getShortUrlFactory()
      .execute(longUrl)
      .then(response => {
        !response.url
          ? res
              .status(400)
              .send(
                JSON.stringify({
                  status: 'ko',
                  code: 400,
                  error: 'Bad Request'
                })
              )
          : res.status(200).send(
              JSON.stringify({
                status: 'ok',
                code: 200,
                data: response
              })
            )
      })
      .catch(e => {
        res
          .status(400)
          .send(JSON.stringify({ status: 'ko', code: 400, error: e.message }))
      })
  })

  return router
}
