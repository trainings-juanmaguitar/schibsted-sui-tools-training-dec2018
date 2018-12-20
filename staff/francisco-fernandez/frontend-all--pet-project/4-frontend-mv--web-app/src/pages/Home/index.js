import React from 'react'
import PropTypes from 'prop-types'

const Home = (_, {i18n}) => (
  <React.Fragment>
    <h1>{i18n.t('HOME_TITLE')}</h1>
    <p>
      Search for the popular movies now. Or write a title and search a list o
      films with that name.
    </p>
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home
