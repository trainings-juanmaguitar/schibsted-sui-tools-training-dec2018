const Domain = require('./lib')

const domain = new Domain()

// domain
//   .get('list_movies_use_case')
//   .execute()
//   .then(console.log) // eslint-disable-line

domain
    .get('search_movies_use_case')
    .execute({query: 'batman'})
    .then(console.log) // eslint-disable-line