import {UseCase} from '@s-ui/domain'

class SearchStudentsByNameUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({query}) {
    const students = await this._repository.searchByName({query})

    return students.map(student => student.toJSON())
  }
}

export default SearchStudentsByNameUseCase
