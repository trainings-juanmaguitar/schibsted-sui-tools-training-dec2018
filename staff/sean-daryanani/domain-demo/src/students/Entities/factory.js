import StudentEntity from './StudentEntity'

class StudentsEntitiesFactory {
    static studentEntity = student => new StudentEntity(student)
}

export default StudentsEntitiesFactory