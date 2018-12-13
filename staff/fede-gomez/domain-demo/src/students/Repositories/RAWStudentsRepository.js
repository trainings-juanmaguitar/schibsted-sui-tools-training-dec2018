import StudentsRepository from "./StudentsRepository";

class RAWStudentsRepository extends StudentsRepository {
  constructor({ config }) {
    super();
    this._config = config;
  }

  async all() { //in our "contract" we have agreed that we would return always a Promise, therefore async
    const students = [
      {
        github: "@anasanjuan",
        name: 'anasanjuan',
        alias: ''
      },
      {
        github: "@b-rage",
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ];
    return students;
  }
}

export default RAWStudentsRepository;
