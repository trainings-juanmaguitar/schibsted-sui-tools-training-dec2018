class Config {
  constructor() {
    this.API_BASE_URL = 'https://jsonplaceholder.typicode.com'
  }
  get(key) {
    return this[key]
  }
}

export default Config
