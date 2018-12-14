import Domain from './src'

const domain = new Domain()

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log) // eslint-disable-line

domain
  .get('search_students_by_name_use_case')
  .execute({query: 'dani'})
  .then(console.log) // eslint-disable-line
