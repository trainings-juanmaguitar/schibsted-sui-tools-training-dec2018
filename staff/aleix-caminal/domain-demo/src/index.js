import {EntryPointFactory} from '@s-ui/domain'
import StudentsUseCasesFactory from './students/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config})
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
