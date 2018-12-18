import { Entity } from "@s-ui/domain";

class MovieEntity extends Entity {
  filter(query) {
    if (query.adult) if (this._adult !== query.adult) return false;
    if (query.title) if (!this._title.toLowerCase().includes(query.title.toLowerCase())) return false;
    if (query.release)
      if (
        new Date(query.release).getTime() !==
        new Date(this._release_date).getTime()
      )
        return false;

    return true;
  }
}

export default MovieEntity;
