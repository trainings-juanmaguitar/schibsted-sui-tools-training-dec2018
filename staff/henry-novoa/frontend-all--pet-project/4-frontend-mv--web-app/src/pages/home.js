import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = (_, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>{i18n.t('HOME_TITLE')}</h1>
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home
