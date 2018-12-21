import {FetcherFactory} from '@s-ui/domain'
import HTTPPhotoRepository from './HTTPPhotoRepository'
import PhotoEntitiesFactory from '../Entities/factory'

class PhotoRepositoryFactory {
  static httpPhotoRepository = ({config}) =>
    new HTTPPhotoRepository({
      config,
      fetcher: FetcherFactory.httpFetcher({config}),
      photoEntityFactory: PhotoEntitiesFactory.photoEntity
    })
}

export default PhotoRepositoryFactory
