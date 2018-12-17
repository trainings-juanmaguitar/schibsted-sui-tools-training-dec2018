import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './Movies/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  discover_movies_use_case: MoviesUseCasesFactory.discoverMoviesUseCase({config})
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain