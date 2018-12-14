import StudentsRepository from './StudentsRepository'

class HTTPStudentsRepository extends StudentsRepository {
  // aunque sea una función síncrona, la hacemos devolver una promesa para cumplir con el contrato.
  // Todo lo que viaje dentro del dominio, debe ser elementos de dominio. (ej, array de entidades o value objects)
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
}

export default HTTPStudentsRepository
