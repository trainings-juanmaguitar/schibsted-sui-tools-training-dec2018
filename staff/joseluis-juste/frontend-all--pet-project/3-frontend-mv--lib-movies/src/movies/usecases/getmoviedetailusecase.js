import { UseCase } from "@s-ui/domain";

class GetMovieDetailUseCase extends UseCase {
  constructor({ config, repository }) {
    super();
    this._config = config;
    this._repository = repository;
  }

  async execute(id) {
    const result =  await this._repository.getMovieDetail(id);
    return result.toJSON()
  }
}

export default GetMovieDetailUseCase;
