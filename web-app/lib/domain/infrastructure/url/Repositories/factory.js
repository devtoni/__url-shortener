import {HttpGetShortUrlRepository} from './HttpGetShortUrlRepository'
import {UrlMappersFactory} from '../Mappers/factory'
import {HttpFetcher} from '../../Fetcher'

export class UrlRepositoriesFactory {
  static httpGetShortUrlRepository = ({config}) => {
    return new HttpGetShortUrlRepository({
      fetcher: new HttpFetcher(),
      mapper: UrlMappersFactory.getShortUrlMapper(),
      apiPostUrl: config.get('API_POST_URL_ENDPOINT')
    })
  }
}
