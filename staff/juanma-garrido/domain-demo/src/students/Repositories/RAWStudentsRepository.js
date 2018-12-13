import StudentsRepository from './StudentsRepository'

class RAWStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory}) {
    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
  }
  all() {
    const students = [
      {
        id: 1,
        github: '@anasanjuan',
        name: 'anasanjuan',
        alias: ''
      },
      {
        id: 2,
        github: '@b-rage',
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ]

    return Promise.resolve(students.map(this._studentsEntityFactory))

  }

}