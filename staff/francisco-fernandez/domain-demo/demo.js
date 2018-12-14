const Domain = require('./lib')

const domain = new Domain()

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log) // eslint-disable-line

domain
  .get('search_student_use_case')
  .execute({query: 'francisco'})
  .then(console.log) // eslint-disable-line
