const Domain = require('./lib')

const domain = new Domain()

domain
  .get('get_movie_by_id_use_case')
  .execute({id: 297802})
  .then(console.log) // eslint-disable-line