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

    const studentsEntities = students.map(this._studentsEntityFactory)
    return Promise.resolve(studentsEntities)
  }
}

export default RAWStudentsRepository
