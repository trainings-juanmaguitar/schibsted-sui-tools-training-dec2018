import {EntryPointFactory} from '@s-ui/domain'

import StudentsUseCasesFactory from './students/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config}),
  search_by_name_students_use_case: StudentsUseCasesFactory.searchByNameStudentsUseCase(
    {config}
  )
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain
