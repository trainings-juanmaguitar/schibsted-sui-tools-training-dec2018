import {Repository} from '@s-ui/domain'

class PhotoRepository extends Repository {
  all() {
    throw new Error('[PhotoRepository#all] must be implemented')
  }
}

export default PhotoRepository
