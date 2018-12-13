import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      repository: StudentsRepositoriesFactory.jsonStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
