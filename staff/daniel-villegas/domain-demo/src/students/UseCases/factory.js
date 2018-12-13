import ListStudentUseCase from './ListStudentsUseCases'
import StudentsRepositoriesFactory from '../Repositories/factory'

class ListStudentUseCasesFactory {
  ListStudentUseCase = ({config}) =>
    new ListStudentUseCase({
      config,
      repository: StudentsRepositoriesFactory.rawStudentsRepository({config})
    })
}

export default ListStudentUseCasesFactory
