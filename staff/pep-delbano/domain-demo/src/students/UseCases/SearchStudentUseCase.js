import {UseCase} from '@s-ui/domain'

class SearchStudent extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute() {
    const students = await this._repository.all()
    return students.map(student => student.toJSON())
  }
}

export default SearchStudent
