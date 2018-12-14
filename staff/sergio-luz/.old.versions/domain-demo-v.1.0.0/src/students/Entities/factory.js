import StudentsEntity from './StudentsEntity'

class StudentsEntititesFactory {
  static stuendtEntity = student => new StudentsEntity(student)
}

export default StudentsEntititesFactory
