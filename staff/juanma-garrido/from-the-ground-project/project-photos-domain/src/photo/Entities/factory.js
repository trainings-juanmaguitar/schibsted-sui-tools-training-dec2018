import PhotoEntity from './PhotoEntity'

class PhotoEntitiesFactory {
  static photoEntity = properties => new PhotoEntity(properties)
}

export default PhotoEntitiesFactory
