import StudentsRepository from './StudentsRepository'

class ROWStudentsRepository extends StudentsRepository {
    constructor({config}) {
        this.config = config
    } 
    async all() {
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
          return students.map(this._studentsEntityFactory)
    }
}

export default ROWStudentsRepository