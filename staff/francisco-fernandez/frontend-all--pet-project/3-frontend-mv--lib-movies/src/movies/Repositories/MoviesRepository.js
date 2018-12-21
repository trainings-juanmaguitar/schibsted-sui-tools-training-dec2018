import {Repository} from '@s-ui/domain'

class MoviesRepository extends Repository {
  popular() {
    throw new Error('[MoviesRepository#popular] mandatory')
  }
  searchByName() {
    throw new Error('[MoviesRepository#searchByName] mandatory')
  }
  detailsById() {
    throw new Error('[MoviesRepository#detailsById] mandatory')
  }
}

export default MoviesRepository
