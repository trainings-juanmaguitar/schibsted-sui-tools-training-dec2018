/* eslint-disable */

import StudentsRepository from './StudentsRepository'

class HTTPStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory, fetcher}) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._studentsEntityFactory = studentsEntityFactory
  }
  async all() {
    const url = this._config.get('URL_JSON_STUDENTS')

    const {data: results} = await this._fetcher.get(url)

    return results.map(this._studentsEntityFactory)
  }

  async search(query) {
    const url = this._config.get('URL_JSON_STUDENTS')

    const data = await this._fetcher.get(url)
    debugger
    let filtered = data.data.filter(student => student.name.indexOf(query) !== -1)
    return filtered.map(this._studentsEntityFactory)
  }
}

export default HTTPStudentsRepository
