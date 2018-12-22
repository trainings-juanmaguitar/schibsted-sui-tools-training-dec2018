import {Repository} from '@s-ui/domain'

/**
 * @interface
 */
class MoviesRepository extends Repository {
  /**
   * @method
   * @return {Error}
   */
  search() {
    throw new Error('[MoviesRepository#search] must be implemented')
  }

  /**
   * @method
   * @return {Error}
   */
  popular() {
    throw new Error('[MoviesRepository#all] must be implemented')
  }

  /**
   * @method
   * @return {Error}
   */
  getMovieById() {
    throw new Error('[MoviesRepository#getMovieById] must be implemented')
  }
}

export default MoviesRepository
