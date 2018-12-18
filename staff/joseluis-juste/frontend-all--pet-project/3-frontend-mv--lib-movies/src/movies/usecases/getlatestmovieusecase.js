import { UseCase } from "@s-ui/domain";

class GetLatestMovieUseCase extends UseCase {
    
  constructor({ config, repository }) {
    super();
    this._config = config;
    this._repository = repository;
  }

  async execute() {
    let result = await this._repository.getLatestMovie();
    return result.toJSON()
  }
}

export default GetLatestMovieUseCase;
