import {EntryPointFactory} from '@s-ui/domain'
import StudentsUseCaseFactory from './students/UseCases/factory'
const config = {}
const useCases = {
  list_students_use_case: StudentsUseCaseFactory.listStudentsUseCase({config})
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
