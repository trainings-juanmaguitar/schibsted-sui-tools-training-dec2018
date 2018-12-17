const Domain = require('./lib')

const domain = new Domain()

domain
  .get('get_populars_use_case')
  .execute()
  .then(data) // eslint-disable-line