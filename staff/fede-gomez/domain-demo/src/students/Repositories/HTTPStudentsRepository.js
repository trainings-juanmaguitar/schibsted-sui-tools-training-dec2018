import StudentsRepository from './StudentsRepository'

class HTTPStudentsRepository extends StudentsRepository {
  constructor({config, fetcher, studentsEntityFactory}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
  }
  async all() {
    const url = this._config.get('URL_JSON_STUDENTS')

    const { data: results } = await this._fetcher.get(url)
    console.log(results)
    return results.map(this._studentsEntityFactory)
  }
}

export default HTTPStudentsRepository
