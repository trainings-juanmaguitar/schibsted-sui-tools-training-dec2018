import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import AtomButton from '@schibstedspain/sui-atom-button'

const Signin = ({
  domain,
  handlerButtonSubmit,
  i18n,
  setStateEmail,
  setStatePassword,
  stateEmail,
  statePassword
}) => (
  <form className="Signin">
    <div className="Signin-form">
      <h3 className="Signin-label">{i18n.t('SIGNIN')}</h3>

      <MoleculeInputField
        id="signin-mail"
        label={i18n.t('SIGNIN_USER_LABEL')}
        onChange={e => setStateEmail(e.target.value)}
        value={stateEmail}
        placeholder={i18n.t('SIGNIN_USER_HINT')}
      />

      <MoleculeInputField
        id="signin-password"
        label={i18n.t('SIGNIN_PASSWORD_LABEL')}
        onChange={e => setStatePassword(e.target.value)}
        value={statePassword}
        placeholder={i18n.t('SIGNIN_USER_PASSWORD')}
      />

      <AtomButton onClick={handlerButtonSubmit}>{i18n.t('SIGNIN')}</AtomButton>

      <Link to="/signup" className="Signin-signup">
        {i18n.t('SIGNUP_USER')}
      </Link>
    </div>
  </form>
)

Signin.propTypes = {
  domain: PropTypes.object,
  handlerButtonSubmit: PropTypes.func,
  i18n: PropTypes.object,
  setStateEmail: PropTypes.func,
  setStatePassword: PropTypes.func,
  stateEmail: PropTypes.string,
  statePassword: PropTypes.string
}

export default Signin
