import {Repository} from '@s-ui/domain'

class StudentsRepository extends Repository {
  all() {
    throw new Error('[StudentsRepository#all] mandatory')
  }
  searchByName() {
    throw new Error('[StudentsRepository#searchByName] mandatory')
  }
}

export default StudentsRepository
