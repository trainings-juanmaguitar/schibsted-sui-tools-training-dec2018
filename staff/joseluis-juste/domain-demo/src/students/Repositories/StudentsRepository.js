import {Repository} from '@s-ui/domain'

class StudentsRepository extends Repository {
  all() {
    throw new Error('[StudentsRepository#all] mandatory')
  }

  search(query) {
    throw new Error('[StudentsRepository#all] mandatory')
  }
}

export default StudentsRepository
