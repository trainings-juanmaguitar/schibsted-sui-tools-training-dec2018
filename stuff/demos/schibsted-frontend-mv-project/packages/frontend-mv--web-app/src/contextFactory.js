import Movies from '../../frontend-mv--lib-movies/src'
import i18nFactory from './literals'

const domain = new Movies()
const i18n = i18nFactory({lang: 'es-ES'})
i18n.setCulture = function(culture) {
  this.culture = culture
}

export default async () => ({
  domain,
  i18n
})
