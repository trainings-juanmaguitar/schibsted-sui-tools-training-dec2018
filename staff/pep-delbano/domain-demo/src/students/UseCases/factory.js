import ListStudentsUseCase from './ListStudentsUseCase'

class StudentsUseCasesFactory {
    ListStudentsUseCase = ({ config }) => 
    new ListStudentsUseCase({
        config, repository: StudentsRepositoriesFactory.rawStudentsRepository({ config })
    })
}

export default StudentsUseCasesFactory