import {Repository} from '@s-ui/domain'

class MoviesRepository extends Repository {
  listPopularMovies() {
    throw new Error('[MoviesRepository#listPopularMovies] mandatory')
  }
  listRecentMovies() {
    throw new Error('[MoviesRepository#listPopularMovies] mandatory')
  }
  listMoviesByName() {
    throw new Error('[MoviesRepository#listPopularMovies] mandatory')
  }
  listMoviesById({id}) {
    throw new Error('[MoviesRepository#listPopularMovies] mandatory')
  }
}

export default MoviesRepository
