import ListStudentsUseCase from './ListStudentsUseCase'
import StudentsRepositoryFactory from '../Repositories/StudentsRepository'

class StudentsUseCasesFactory {
  ListStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoryFactory.rawStudentsRepository({config})
    })
}
export default StudentsUseCasesFactory
