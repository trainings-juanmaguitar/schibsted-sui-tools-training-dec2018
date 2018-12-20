import Domain from '../../3-frontend-mv--lib-movies/src'
import i18nFactory from './literals'

const domain = new Domain()
const i18n = i18nFactory({lang: 'en-GB'})

export default async () => ({domain, i18n})
