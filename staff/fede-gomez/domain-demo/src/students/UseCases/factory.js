import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      repository: StudentsRepositoriesFactory.httpStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
