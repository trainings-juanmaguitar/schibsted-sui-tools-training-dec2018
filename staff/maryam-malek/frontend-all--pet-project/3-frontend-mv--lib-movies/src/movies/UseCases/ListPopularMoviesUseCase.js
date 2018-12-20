import {UseCase} from '@s-ui/domain'

class ListPopularMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({page}) {
    const moviesList = await this._repository.listPopularMovies({page})
    const {actualPage, totalPages, totalResults, movies} = moviesList
    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(movie => movie.toJSON())
    }
  }
}

export default ListPopularMoviesUseCase
