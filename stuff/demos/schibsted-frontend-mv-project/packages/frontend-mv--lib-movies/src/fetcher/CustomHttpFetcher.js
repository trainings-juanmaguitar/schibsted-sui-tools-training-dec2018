class CustomHttpFetcher {
  constructor({config, cookie, fetcher}) {
    this._config = config
    this._cookie = cookie
    this._fetcher = fetcher
  }

  setHeaders() {
    const cookies = this._config.get('cookies')
    if (cookies) {
      this._fetcher._axios.interceptors.request.use(config => {
        config.withCredentials = true
        config.crossDomain = true
        if (typeof window === 'undefined')
          config.headers = {Cookie: `${cookies}`}
        return config
      })
    }
  }

  get(url, options) {
    this.setHeaders()
    return this._fetcher.get(url, options)
  }

  post(url, body, options) {
    this.setHeaders()
    return this._fetcher.post(url, body, options)
  }

  put(url, body, options) {
    this.setHeaders()
    return this._fetcher.put(url, body, options)
  }

  delete(url, options) {
    this.setHeaders()
    return this._fetcher.delete(url, options)
  }
}

export default CustomHttpFetcher
