const fetch = require('node-fetch')

module.exports = ({
  post(url = '', { headers = {}, ...rest }) {
    return fetch(url, {
      method: 'POST',
      headers,
      ...rest
    })
      .then(response => response.json())
      .catch(e => e)
  }
})