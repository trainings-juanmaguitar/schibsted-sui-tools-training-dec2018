import ListStudentsUseCase from './ListStudentsUseCase'
import StudentsRepositoriesFactory from '../Repositories/factory'

class StudentsUseCasesFactory {
    listStudentsUseCase = ({config}) => new ListStudentsUseCase({
        config,
        repository: StudentsRepositoriesFactory.rawStudentsRpository({config})
     })
}

export default StudentsUseCasesFactory