import React from 'react'
import PropTypes from 'prop-types'

const Home = (_, {i18n}) => (
  <React.Fragment>
    <h1>{i18n.t('HOME_TITLE')}</h1>
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home
