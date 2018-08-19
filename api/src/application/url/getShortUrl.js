module.exports = ({ httpRepository, urlValueObject }) => ({
  async execute(longUrl) {
    const { shortLink = ''} = await httpRepository.getShortUrl(longUrl)
    return urlValueObject({url: shortLink})
  }
})
