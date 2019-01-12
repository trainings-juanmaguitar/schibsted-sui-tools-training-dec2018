import cookie from '@s-ui/js/lib/cookie'
import {FetcherFactory} from '@s-ui/domain'

import CustomHttpFetcher from './CustomHttpFetcher'

class CustomFetcherFactory {
  static customHttpFetcher = ({config}) =>
    new CustomHttpFetcher({
      config,
      cookie,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

export default CustomFetcherFactory
