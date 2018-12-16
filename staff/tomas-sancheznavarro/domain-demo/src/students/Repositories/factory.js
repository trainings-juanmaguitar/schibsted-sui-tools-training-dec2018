import RAWStudentsRepository from './RAWStudentsRepository'

import studentsEntityFactory from '../Entities/factory'

class StudentsRepositoriesFactory {
  static RAWStudentsRepository = ({config}) =>
    new RAWStudentsRepository({config, studentsEntityFactory})
}

export default StudentsRepositoriesFactory
