import StudentsRepository from './StudentsRepository'

class RAWStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory}) {
    super()

    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
  }

  all() {
    const students = [
      {
        github: '@anasanjuan',
        name: 'anasanjuan',
        alias: ''
      },
      {
        github: '@b-rage',
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ]

    return Promise.resolve(students.map(this._studentsEntityFactory))
  }
}

export default RAWStudentsRepository
