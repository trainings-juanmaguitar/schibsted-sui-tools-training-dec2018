import {Repository} from '@s-ui/domain'

class MoviesRepository extends Repository {
  popular() {
    throw new Error('[MoviesRepository#popular] mandatory')
  }

  search() {
    throw new Error('[MoviesRepository#search] mandatory')
  }
}

export default MoviesRepository
