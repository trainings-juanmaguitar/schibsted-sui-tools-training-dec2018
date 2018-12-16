import {EntryPointFactory} from '@s-ui/domain' // factory es una función creadora de objetos

const config = {}
const useCases = {}

const Domain = EntryPointFactory({config, useCases})

export default Domain
