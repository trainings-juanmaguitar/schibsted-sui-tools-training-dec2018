import {Repository} from '@s-ui/domain'

class StudentsRepository extends Repository {
  all() {
    throw new Error('[StudentsRepository#all] mandatory')
  }

  byName() {
    throw new Error('[StudentsRepository#byName] mandatory')
  }
}

export default StudentsRepository
