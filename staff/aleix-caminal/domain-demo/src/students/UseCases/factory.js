import ListStudentsUseCase from './ListStudentsUseCase'
import StudentsRepositoriesFactory from '../Repositories/factory'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoriesFactory.httpStudentsRepository({config})
    })
}

export default StudentsUseCasesFactory
