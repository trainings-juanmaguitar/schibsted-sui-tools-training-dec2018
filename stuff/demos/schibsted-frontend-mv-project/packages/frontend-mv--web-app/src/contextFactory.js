import Movies from '../../frontend-mv--lib-movies/src'
import i18nFactory from './literals'

const i18n = i18nFactory({lang: 'es-ES'})
i18n.setCulture = function(culture) {
  this.culture = culture
}

export default async params => {
  const domain = new Movies()
  Object.keys(params).forEach(key => {
    domain.config(key, params[key])
  })
  // console.log(params) // eslint-disable-line
  return {domain, i18n}
}
