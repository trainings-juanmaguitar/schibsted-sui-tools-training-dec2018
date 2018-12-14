import ListStudentsUseCase from './ListStudentsUseCase'
import StudentsRepositoriesFactory from '../Repositories/factory'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoriesFactory.rawStudentsRepository
    })
}

export default StudentsUseCasesFactory
