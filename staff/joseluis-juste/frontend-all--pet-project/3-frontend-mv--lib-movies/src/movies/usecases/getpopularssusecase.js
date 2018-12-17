import { UseCase } from "@s-ui/domain";

class GetPopularsUseCase extends UseCase {
    
  constructor({ config, repository }) {
    super();
    this._config = config;
    this._repository = repository;
  }

  async execute() {
    const movies = await this._repository.getPopulars();
    return movies.map(movie => movie.toJSON());
  }
}

export default GetPopularsUseCase;
