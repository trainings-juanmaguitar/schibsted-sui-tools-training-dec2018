import {EntryPointFactory} from '@s-ui/domain'
<<<<<<< HEAD
import StudentsUseCaseFactory from './students/UseCases/factory'
const config = {}
const useCases = {
  list_students_use_case: StudentsUseCaseFactory.listStudentsUseCase({config})
}

=======

import StudentsUseCasesFactory from './students/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config})
}

console.log('entry point') // eslint-disable-line

>>>>>>> devel
const Domain = EntryPointFactory({config, useCases})

export default Domain