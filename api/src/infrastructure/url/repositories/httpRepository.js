module.exports = ({ fetcher }) => ({
  getShortUrl(longUrl) {
    const apiKey = process.env.FIREBASE_DYNAMIC_LINKS_API_KEY

    return fetcher.post(
      `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${apiKey}`,
      {
        body: JSON.stringify({
          longDynamicLink: `https://devtoni.page.link/?link=${longUrl}`
        })
      }
    )
  }
})
