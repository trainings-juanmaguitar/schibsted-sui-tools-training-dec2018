// import Domain from '../../3-frontend-mv--lib-movies/src'
import Domain from '3-frontend-mv--lib-movies'
import i18nFactory from './literals'

export default async () => ({
  domain: new Domain(),
  i18n: i18nFactory({lang: 'es-ES'})
})
