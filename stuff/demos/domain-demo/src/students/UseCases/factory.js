import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      repository: StudentsRepositoriesFactory.rawStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
