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
    throw new Error('[search] must be implemented')
  }
}

export default MoviesRepository
