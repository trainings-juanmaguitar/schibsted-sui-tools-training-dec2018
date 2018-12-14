import StudentsEntity from './StudentEntity'

class StudentsEntitiesFactory {
  static studentEntity = student => new StudentsEntity(student)
}

export default StudentsEntitiesFactory
