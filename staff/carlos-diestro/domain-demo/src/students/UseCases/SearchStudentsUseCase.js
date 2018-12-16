import {UseCase} from '@s-ui/domain'

class SearchStudentsUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute(query) {
    const students = await this._repository.all()
    return students.filter(student => {
      debugger // eslint-disable-line
      // appears _name intead of name

      return student._name === query
    })
  }
}

export default SearchStudentsUseCase
