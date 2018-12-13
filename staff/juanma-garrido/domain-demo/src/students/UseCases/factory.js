import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'

class StudentsUseCasesFactory {
  listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoriesFactory.rawStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
