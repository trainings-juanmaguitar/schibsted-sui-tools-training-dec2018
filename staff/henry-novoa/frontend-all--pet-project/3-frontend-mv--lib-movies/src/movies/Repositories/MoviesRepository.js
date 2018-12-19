import {Repository} from '@s-ui/domain'

class MoviesRepository extends Repository {
  all() {
    throw new Error('[MoviesRepository#popular] mandatory')
  }
  searchByName() {
    throw new Error('[MoviesRepository#searchByName] mandatory')
  }
}

export default MoviesRepository
