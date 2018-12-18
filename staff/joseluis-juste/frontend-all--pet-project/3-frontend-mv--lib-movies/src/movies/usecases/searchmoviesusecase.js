import { UseCase } from "@s-ui/domain";

class SearchMoviesUseCase extends UseCase {
    
  constructor({ config, repository }) {
    super();
    this._config = config;
    this._repository = repository;
  }

  async execute(query, page = 1) {
    const result = await this._repository.searchMovies(query, page);
    return result.toJSON()
  }
}

export default SearchMoviesUseCase;
