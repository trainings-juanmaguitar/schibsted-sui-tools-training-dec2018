import {EntryPointFactory} from '@s-ui/domain'

import StudentsUseCasesFactory from './students/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config}),
  list_students_by_name_use_case: StudentsUseCasesFactory.listStudentsByUsernameUseCase(
    {config}
  )
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain
