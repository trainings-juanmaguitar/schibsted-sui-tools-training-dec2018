import StudentsEntity from './StudentsEntity'

class StudentsEntitiesFactory {
  static studentEntity = student => new StudentsEntity(student)
}

export default StudentsEntitiesFactory
