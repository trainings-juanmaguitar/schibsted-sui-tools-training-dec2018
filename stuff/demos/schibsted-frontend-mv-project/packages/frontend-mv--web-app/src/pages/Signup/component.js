import React from 'react'
import PropTypes from 'prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import AtomButton from '@schibstedspain/sui-atom-button'

const Signup = ({
  domain,
  handlerButtonSubmit,
  i18n,
  setStateEmail,
  setStateName,
  setStatePassword,
  stateEmail,
  stateName,
  statePassword
}) => (
  <div className="Signup">
    <div className="Signup-form">
      <h3 className="Signup-label">{i18n.t('SIGNUP')}</h3>

      <MoleculeInputField
        tabindex={0}
        id="signup-name"
        label={i18n.t('SIGNUP_USERNAME_LABEL')}
        onChange={(e, {value}) => setStateName(value)}
        value={stateName}
        placeholder={i18n.t('SIGNUP_USERNAME_LABEL')}
      />

      <MoleculeInputField
        tabindex={1}
        id="signup-mail"
        label={i18n.t('SIGNUP_USER_LABEL')}
        onChange={(e, {value}) => setStateEmail(value)}
        value={stateEmail}
        placeholder={i18n.t('SIGNUP_USER_LABEL')}
      />

      <MoleculeInputField
        tabindex={2}
        id="signup-password"
        label={i18n.t('SIGNUP_PASSWORD_LABEL')}
        onChange={(e, {value}) => setStatePassword(value)}
        type="sui-password"
        value={statePassword}
        placeholder={i18n.t('SIGNUP_PASSWORD_LABEL')}
      />

      <AtomButton onClick={handlerButtonSubmit}>{i18n.t('SIGNUP')}</AtomButton>
    </div>
  </div>
)

Signup.propTypes = {
  domain: PropTypes.object,
  handlerButtonSubmit: PropTypes.func,
  i18n: PropTypes.object,
  setStateEmail: PropTypes.func,
  setStateName: PropTypes.func,
  setStatePassword: PropTypes.func,
  stateEmail: PropTypes.string,
  stateName: PropTypes.string,
  statePassword: PropTypes.string
}

export default Signup
