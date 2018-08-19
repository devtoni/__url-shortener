const serverless = require('serverless-http')

const server = require('../interface/http/server')

module.exports.handler = serverless(server())