import {EntryPointFactory} from '@s-ui/domain'

import StudentsUseCasesFactory from './students/UseCases/factory'

const config = {}
const useCases = {
  list_students_use_case: StudentsUseCasesFactory.listStudentsUseCase({config})
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
