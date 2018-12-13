import StudentEntity from './StudentEntity'

class StudentEntitiesFactory {
  static studentEntity = student => new StudentEntity(student)
}

export default StudentEntitiesFactory
