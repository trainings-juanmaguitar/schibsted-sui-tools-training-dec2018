import {UseCase} from '@s-ui/domain'

class SearchStudentUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    const student = await this._repository
      .all()
      .filter(({name}) => name.includes(query))
      .map(students => student.toJSON())
  }
}

export default SearchStudentUseCase
