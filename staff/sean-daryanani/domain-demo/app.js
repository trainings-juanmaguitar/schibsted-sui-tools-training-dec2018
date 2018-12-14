import Domain from '../../domain-demo/src'
import withContext from '@s-ui/hoc/lib/withContext'

const domain = new Domain()

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log)
