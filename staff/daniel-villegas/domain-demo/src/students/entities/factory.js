import StudentEntity from './StudentEntity'

class StudentsEntitiesFactory {
    static StudentEntity = student => new StudentEntity(student)
}

export default StudentsEntitiesFactory