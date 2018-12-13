import StudentEntity from "./StudentEntity";

// this Factory will allow us to inject dependencies when instanciating a new class

class StudentsEntityFactory {
  static studentEntity = student => new StudentEntity(student);
}

export default StudentsEntityFactory;
