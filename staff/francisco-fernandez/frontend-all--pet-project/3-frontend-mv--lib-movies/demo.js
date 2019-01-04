const Domain = require('./lib')

const domain = new Domain()

domain
  .get('list_movies_use_case')
  .execute()
  .then(console.log) // eslint-disable-line

// domain
//   .get('search_by_name_movies_use_case')
//   .execute({query: 'batman'})
//   .then(console.log) // eslint-disable-line

// domain
//   .get('search_movie_details_use_case')
//   .execute({id: '251519'})
//   .then(console.log)// eslint-disable-line
