import {UseCase} from '@s-ui/domain'

class SearchStudentsByNameUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({q}) {
    const student = await this._repository.all()
    return student.filter({q}).toJSON()
  }
}

export default SearchStudentsByNameUseCase
