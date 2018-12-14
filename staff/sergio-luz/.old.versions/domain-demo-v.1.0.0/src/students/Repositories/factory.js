import RAWStudentsRepository from './RAWStudentsRepository'
import StudentsEntityFactory from '../Entities/factory'

class StudentsRepositoriesFactory {
  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntityFactory.stuendtEntity
    })
}
export default StudentsRepositoriesFactory
