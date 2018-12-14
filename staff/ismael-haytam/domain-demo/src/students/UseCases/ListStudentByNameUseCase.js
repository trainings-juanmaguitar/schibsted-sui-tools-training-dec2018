import {UseCase} from '@s-ui/domain'

class ListStudentByNameUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    let students = await this._repository.byName({query})
    return students.map(student => student.toJSON())
  }
}

export default ListStudentByNameUseCase
