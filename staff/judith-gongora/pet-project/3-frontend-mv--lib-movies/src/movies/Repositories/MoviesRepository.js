import {Repository} from '@s-ui/domain'

class MoviesRepository extends Repository {
  listPopularMovies() {
    throw new Error('[MoviesRepository#all] mandatory')
  }
}

export default MoviesRepository
