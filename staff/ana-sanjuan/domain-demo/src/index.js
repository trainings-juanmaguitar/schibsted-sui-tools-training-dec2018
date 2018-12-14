import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'

import StudentsUseCasesFactory from './students/UseCases/factory'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config})
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
