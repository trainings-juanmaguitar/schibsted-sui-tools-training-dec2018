import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {LanguageContainer} from '../../state'

import {
  NavbarItem,
  NavbarBrand,
  Navbar,
  NavbarMenu,
  NavbarEnd,
  NavbarDivider
} from 'bloomer'

import AtomButton from '@schibstedspain/sui-atom-button'

import Link from 'react-router/lib/Link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const BASE_CLASS = `MoviesApp`
const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
const CLASS_TOOLBAR_LANGUAGES = `${CLASS_TOOLBAR}-languages`

class NavbarApp extends Component {
  constructor() {
    super()
    this.changeLanguageES = this.changeLanguage.bind(null, {locale: 'es'})
    this.changeLanguageEN = this.changeLanguage.bind(null, {locale: 'en'})
    this.language = new LanguageContainer()
  }

  changeLanguage = ({locale}) => {
    const {i18n, domain, router} = this.context
    let {
      location: {pathname: currentPath}
    } = router

    const localeConfig = domain.get('config').get('locale')
    const {language: lang} = localeConfig[locale]

    console.log(`changing language to ${lang}`) // eslint-disable-line
    if (currentPath[0] !== '/') currentPath = '/' + currentPath
    const hasLocale = /^\/(es|en)/.test(currentPath)
    const pathRedirect = hasLocale
      ? currentPath.replace(/^\/(es|en)/, `/${locale}`)
      : `/${locale}${currentPath}`

    i18n.setCulture(lang)
    this.language.changeLanguage({lang})
    router.push(pathRedirect)
  }

  loginWithGoogle = async () => {
    const {domain, router} = this.context
    const {
      location: {pathname: currentPath}
    } = router
    await domain.get('login_with_google_use_case').execute()
    router.push(currentPath)
  }

  logout = async () => {
    const {domain, router} = this.context
    const {
      location: {pathname: currentPath}
    } = router
    await domain.get('logout_use_case').execute()
    router.push(currentPath)
  }

  render() {
    const {i18n, router} = this.context
    const {user} = this.props
    const {changeLanguageES, changeLanguageEN, loginWithGoogle, logout} = this
    const {
      params: {locale}
    } = router

    return (
      <div className="Navbar">
        <Navbar
          style={{
            border: 'solid 1px #00D1B2',
            margin: '0',
            width: '100%'
          }}
        >
          <NavbarBrand>
            <NavbarItem style={{marginRight: '10px'}}>
              <Link
                to={locale ? `/${locale}/` : `/`}
                style={{
                  marginLeft: '10px',
                  display: 'flex',
                  width: '65px',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FontAwesomeIcon icon={'home'} />
                {i18n.t('HOME')}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </NavbarItem>
            <NavbarItem>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarEnd>
              <NavbarItem>
                <Link to={locale ? `/${locale}/popular` : `/popular`}>
                  {i18n.t('POPULAR_MOVIES_TITLE')}
                </Link>
              </NavbarItem>
              {user && (
                <NavbarItem>
                  <Link to={locale ? `/${locale}/favorites` : `/favorites`}>
                    {i18n.t('FAVORITES_MOVIES_TITLE')}
                  </Link>
                </NavbarItem>
              )}
            </NavbarEnd>
          </NavbarMenu>
          <NavbarDivider />
          <NavbarItem className={CLASS_TOOLBAR_LANGUAGES}>
            <a onClick={changeLanguageEN}>EN</a>
            |
            <a onClick={changeLanguageES}>ES</a>
          </NavbarItem>
          <NavbarDivider />
          <NavbarItem>
            {user ? (
              <AtomButton type="tertiary" onClick={logout}>
                <span>{i18n.t('SIGNOUT')}</span>&nbsp;<strong>
                  ({user.name})
                </strong>
              </AtomButton>
            ) : (
              <button
                className="loginBtn loginBtn--google"
                onClick={loginWithGoogle}
              >
                {i18n.t('LOGIN_WITH_GOOGLE')}
              </button>
            )}
          </NavbarItem>
        </Navbar>
      </div>
    )
  }
}

NavbarApp.propTypes = {children: PropTypes.element, user: PropTypes.object} // eslint-disable-line
NavbarApp.contextTypes = {
  i18n: PropTypes.object,
  router: PropTypes.object,
  domain: PropTypes.object,
  state: PropTypes.object
}

NavbarApp.renderLoading = () => <h1>Loading...</h1>

export default NavbarApp
