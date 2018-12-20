<<<<<<< HEAD
import domain from '../../3-frontend-mv--lib-movies/src'
import i18nFactory from './literals'
=======
import Domain from '../../3-frontend-mv--lib-movies/src'

const domain = new Domain()
>>>>>>> devel

const i18n = i18nFactory({lang: 'es-ES'})
export default async () => ({domain, i18n})
