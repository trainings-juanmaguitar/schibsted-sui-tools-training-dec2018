import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({query, page, language, region} = {}) {
    const resultsSearchMovies = await this._repository.search({
      query,
      page,
      language,
      region
    })
    return resultsSearchMovies.toJSON()
  }
}
