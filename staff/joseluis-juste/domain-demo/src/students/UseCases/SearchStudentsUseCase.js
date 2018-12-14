import {UseCase} from '@s-ui/domain'

class SearchStudentUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute(query) {
    const students = await this._repository.search(query)
    return students.map(student => student.toJSON())
  }
}

export default SearchStudentUseCase
