import { Repository } from "@s-ui/domain";

class MoviesRepository extends Repository {
  getPopulars() {
    throw new Error("[StudentsRepository#all] mandatory");
  }
}

export default MoviesRepository;
