import StudentsRepository from './StudentsRepository'

class RAWStudentsRepository extends StudentsRepository {
  constructor({config}) {
    this._config = config
  }
  all() {
    const students = [
      {
        github: '@anasanjuan',
        name: 'anasanjuan',
        alias: ''
      },
      {
        github: '@b-rage',
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ]

    return Promise.resolve(students)

  }

}