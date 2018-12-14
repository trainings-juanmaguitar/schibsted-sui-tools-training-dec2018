const Domain = require('./lib')

const domain = new Domain()

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log) // eslint-disable-line no-console
