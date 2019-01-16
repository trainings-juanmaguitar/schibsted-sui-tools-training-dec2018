class CustomHttpFetcher {
  constructor({config, cookie, fetcher}) {
    this._config = config
    this._cookie = cookie
    this._fetcher = fetcher
  }

  setHeaders() {
    const cookieUserName = this._config.get('COOKIE_SESSION_NAME')
    const cookies = this._config.get('cookies')
    if (cookies) {
      const jsonToken = this._cookie.parse(cookies)[cookieUserName]
      const {token} = JSON.parse(jsonToken)
      this._fetcher._axios.interceptors.request.use(config => {
        config.headers = {Authorization: `Bearer ${token}`}
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
