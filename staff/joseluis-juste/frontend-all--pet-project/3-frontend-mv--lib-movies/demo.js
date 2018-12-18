const Domain = require('./lib')

const domain = new Domain()

domain
  .get('search_movies_use_case')
  .execute({release:"2018-12-07", title:"spider"})
  .then(console.log) // eslint-disable-line