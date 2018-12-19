import {UseCase} from '@s-ui/domain'

/**
 * @implements UseCase
 */
export default class GetMovieDetailsByIdUseCase extends UseCase {
  /**
   * @constructor
   * @param {Object} deps
   * @param {UseCase} deps.service
   */
  constructor({repository}) {
    super({repository})

    this._repository = repository
  }

  /**
   * @return {Promise<Object, Error>} returns a MovieEntity
   * @property {Object} movie
   */
  async execute({id}) {
    const movie = await this._repository.getMovieById({id})
    return movie ? movie.toJSON() : null
  }
}
