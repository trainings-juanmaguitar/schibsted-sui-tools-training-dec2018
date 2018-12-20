import {UseCase} from '@s-ui/domain'

class ListLatestMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({page}) {
    const moviesList = await this._repository.listLatestMovies({page})
    const {actualPage, totalPages, totalResults, movies} = moviesList
    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(movie => movie.toJSON())
    }
  }
}
export default ListLatestMoviesUseCase

// FALTA PASSAR_HO TOT AMB TOJSON
