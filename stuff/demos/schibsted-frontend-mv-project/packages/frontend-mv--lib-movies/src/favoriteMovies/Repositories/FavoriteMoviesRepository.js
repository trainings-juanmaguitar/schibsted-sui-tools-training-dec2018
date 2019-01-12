import {Repository} from '@s-ui/domain'

/**
 * @interface
 */
class FavoriteMoviesRepository extends Repository {
  /**
   * @method
   * @return {Error}
   */
  getIds() {
    throw new Error('[FavoriteMoviesRepository#getIds] must be implemented')
  }

  /**
   * @method
   * @return {Error}
   */
  getMoviesList() {
    throw new Error(
      '[FavoriteMoviesRepository#getMoviesList] must be implemented'
    )
  }
}

export default FavoriteMoviesRepository
