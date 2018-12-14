import {UseCase} from '@s-ui/domain'

class ListStudentsUseCase extends UseCase {
  constructor(repository) {
    super()
    this._repository = repository // el "_" indica variable privada, la próxima versión de Babel lo indicará con un #
  }
  execute() {}
}

export default ListStudentsUseCase
