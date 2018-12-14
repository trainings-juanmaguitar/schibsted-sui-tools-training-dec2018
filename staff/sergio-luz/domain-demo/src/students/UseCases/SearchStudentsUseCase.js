import {UseCase} from '@s-ui/domain'

class SearchStudentsUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute(query) {
    console.log(query) // eslint-disable-line
    const students = await this._repository.all()
    console.log('Students=> ' + students) // eslint-disable-line
    const _students = students.filter(student => student._name.includes(query))

    // const _students = students.filter(student => student.indexOf(query) !== -1)
    console.log('_Students=> ' + _students) // eslint-disable-line
    return _students.map(student => student.toJSON())
  }
}

export default SearchStudentsUseCase
