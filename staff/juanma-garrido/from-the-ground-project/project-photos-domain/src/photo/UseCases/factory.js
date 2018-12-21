import GetAllPhotosUseCase from './GetAllPhotosUseCase'
import PhotoRepositoryFactory from '../Repositories/factory'

class PhotoUseCasesFactory {
  static getAllPhotosUseCase = ({config}) =>
    new GetAllPhotosUseCase({
      config,
      repository: PhotoRepositoryFactory.httpPhotoRepository({config})
    })
}

export default PhotoUseCasesFactory
