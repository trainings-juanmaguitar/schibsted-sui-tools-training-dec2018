import RAWStudentsRepository from './RAWStudentsRepository'
import StudentsEntitiesFactory from '../entities/factory'

class StudentsRepositoriesFactory {
    static rawStudentsRepository = ({config}) => {
        new RAWStudentsRepository({
            config,
            studentsEntityFactory: StudentsEntitiesFactory.studentEntity
        })
    }
}

export default StudentsRepositoriesFactory