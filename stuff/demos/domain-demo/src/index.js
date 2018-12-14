import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'

import StudentsUseCasesFactory from './students/UseCases/factory'

console.log("domain...")

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config})
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
