import RAWStudentsRepository from "./RAWStudentsRepository";
import StudentsEntityFactory from "../Entities/factory";

class StudentsRepositoriesFactory {
  static rawStudentsRpository = ({ config }) => {
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntityFactory.studentsEntity
    });
  };
}

export default StudentsRepositoriesFactory;
