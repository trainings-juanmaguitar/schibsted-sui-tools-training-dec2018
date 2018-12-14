import StudentEntity from '.StudentEntity'

class StudentsEntitiesFactory {
  static StudentEntity = student => new StudentEntity(student)
}

export default StudentsEntitiesFactory // Factory - métodos estáticos que van a recibir datos en JS y van a devolver una instancia.
