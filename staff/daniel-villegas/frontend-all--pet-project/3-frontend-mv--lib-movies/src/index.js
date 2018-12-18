import {EntryPointFactory} from '@s-ui/domain'

import MoviesUseCasesFactory from './movies/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_movies_use_case: MoviesUseCasesFactory.listMoviesUseCase({config}),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase(
    {config}
  )
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain
