import {Service} from '@s-ui/domain'

class GetFavoritesMoviesService extends Service {
  constructor({
    favoriteMoviesRepository,
    moviesRepository,
    moviesListValueObject,
    mapper,
    config
  }) {
    super()
    this._config = config
    this._mapper = mapper
    this._favoriteMoviesRepository = favoriteMoviesRepository
    this._moviesRepository = moviesRepository
    this._moviesListValueObject = moviesListValueObject
  }

  async execute() {
    /* eslint-disable */
    const idsFavoritesMovies = await this._favoriteMoviesRepository.getIds()
    const {ids = []} = idsFavoritesMovies && idsFavoritesMovies.toJSON()
    console.log(ids)
    const favoriteMovies = await Promise.all(
      ids.map(id => this._moviesRepository.getMovieById({id}))
    )
    console.log(favoriteMovies)
    return this._moviesListValueObject({
      page: 1,
      totalResults: favoriteMovies.length,
      totalPages: 1,
      movies: favoriteMovies
    })
  }
}

export default GetFavoritesMoviesService
