import StudentsRepositoriesFactory from '../Repositories/factory'
import StudentsRepositoriesFactory from '../Repositories/factory'

import ListStudentsUseCase from './ListStudentsUseCase'
import SearchStudentUseCase from './SearchStudentUseCase'

class StudentsUseCasesFactory {
  static listStudentsUseCase = ({config}) =>
    new ListStudentsUseCase({
      config,
      repository: StudentsRepositoriesFactory.httpStudentsRepository({ config })
    })
  }

  static searchStudentUseCase = ({ config }) => {
      new SearchStudentUseCase({
        config,
        repository: SearchStudentRepository.httpStudentsRepository({ config })
      })
  }

export default StudentsUseCasesFactory
