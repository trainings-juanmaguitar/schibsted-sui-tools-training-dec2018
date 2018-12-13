import {UseCase} from '@s-ui/domain'

class ListStudentsUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository.all()
  }
}

export default ListStudentsUseCase
