import StudentsRepository from './StudentsRepository'

class HTTPStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory, fetcher}) {
    super()

    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
    this._fetcher = fetcher
  }

  async all() {
    const url = this._config.get('URL_JSON_STUDENTS')

    const {data: results} = await this._fetcher.get(url)

    return results.map(this._studentsEntityFactory)
  }
}

export default HTTPStudentsRepository
