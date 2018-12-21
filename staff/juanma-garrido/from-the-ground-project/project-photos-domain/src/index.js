import {EntryPointFactory} from '@s-ui/domain'
import PhotoUseCasesFactory from './photo/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  get_all_photos_use_case: PhotoUseCasesFactory.getAllPhotosUseCase({config})
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
