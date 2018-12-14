import StudentRepository from './StudentRepository'

class RAWStudentsRepository extends StudentRepository {
  constructor({config}) {
    super()
    this._config = config
  }

  all() {
    const students = [
      {
        id: 1,
        github: '@anasanjuan',
        name: 'anasanjuan',
        alias: ''
      },
      {
        id: 2,
        github: '@b-rage',
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ]
    return Promise.resolve(students.map(this._studentsEntityFactory))
  }
}

export default RAWStudentsRepository
