import StudentsRepository from './StudentsRepository'

class JSONStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory}) {
    super()
    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
  }
  all() {
    return Promise.resolve([])
  }
}

export default JSONStudentsRepository
