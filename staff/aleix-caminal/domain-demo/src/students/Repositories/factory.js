import RAWStudentsRepository from './RAWStudentsRepository'
import StudentsEntitiesFactory from '../Entities/factory'

class StudentsRepositoriesFactory {
  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })
}

export default StudentsRepositoriesFactory
