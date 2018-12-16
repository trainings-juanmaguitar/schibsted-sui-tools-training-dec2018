import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'
import ListStudentByNameUseCase from './ListStudentByNameUseCase'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoriesFactory.httpStudentsRepository({config})
    })

  static listStudentByNameUseCase = ({config}) =>
    new ListStudentByNameUseCase({
      config,
      repository: StudentsRepositoriesFactory.httpStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
