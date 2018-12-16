import {EntryPointFactory} from '@s-ui/domain'

import StudentsUseCasesFactory from './students/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config}),
  list_student_by_name_use_case: StudentsUseCasesFactory.listStudentByNameUseCase(
    {config}
  )
}

console.log('entry point') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain
