import { Repository } from "@s-ui/domain";

class MoviesRepository extends Repository {
  getPopulars(page = 1) {
    throw new Error("[StudentsRepository#all] mandatory");
  }

  getMovieDetail(id) {
    throw new Error("[StudentsRepository#all] mandatory");
  }

  getLatestMovie() {
    throw new Error("[StudentsRepository#all] mandatory");
  }
  searchMovies(query, page = 1) {
    throw new Error("[StudentsRepository#all] mandatory");
  }
}

export default MoviesRepository;
