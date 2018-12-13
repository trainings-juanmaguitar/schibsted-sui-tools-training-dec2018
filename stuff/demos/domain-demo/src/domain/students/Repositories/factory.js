import StudentsEntitiesFactory from '../Entities/factory'

import JSONStudentsRepository from './JSONStudentsRepository'
import RAWStudentsRepository from './RAWStudentsRepository'

class StudentsRepositoriesFactory {
  static jsonStudentsRepository = ({config}) =>
    new JSONStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })

  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })
}

export default StudentsRepositoriesFactory
