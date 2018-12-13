const Domain = require('./lib').default

const domain = new Domain()

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log)