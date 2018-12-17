import {EntryPointFactory} from '@s-ui/domain'

import MoviesUseCasesFactory from './movies/usecases/factory'
import Config from './config'

const config = new Config()
const UseCases = {
  get_populars_use_case: MoviesUseCasesFactory.getPopularsUseCase({ config })
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, UseCases})

export default Domain
