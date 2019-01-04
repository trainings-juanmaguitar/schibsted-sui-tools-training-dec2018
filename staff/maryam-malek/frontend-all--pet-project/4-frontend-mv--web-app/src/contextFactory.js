// import Domain from '../../3-frontend-mv--lib-movies/src'
import Domain from '3-frontend-mv--lib-movies'
import i18nFactory from './literals'

const domain = new Domain()
const i18n = i18nFactory({lang: 'es-ES'})
i18n.setCulture = function(culture) {
  this.culture = culture
}

export default async () => ({
  domain,
  i18n
})
