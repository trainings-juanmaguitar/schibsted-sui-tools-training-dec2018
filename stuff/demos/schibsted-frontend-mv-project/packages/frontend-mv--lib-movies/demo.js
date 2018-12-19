const Domain = require('./lib')

const domain = new Domain()

domain
  .get('get_popular_movies_use_case')
  .execute()
  .then(console.log) // eslint-disable-line