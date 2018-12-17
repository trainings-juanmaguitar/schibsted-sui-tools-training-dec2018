const Domain = require('./lib')

const domain = new Domain()

domain
  .get('discover_movies_use_case')
  .execute()
  .then(console.log)