import StudentsEntitiesFactory from '../Entities/factory'

import RAWStudentsRepository from './RAWStudentsRepository'

class StudentsRepositoriesFactory {
  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })
}

export default StudentsRepositoriesFactory
