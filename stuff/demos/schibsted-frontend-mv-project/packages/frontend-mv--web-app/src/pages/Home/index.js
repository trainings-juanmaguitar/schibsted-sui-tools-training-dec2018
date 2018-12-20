import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import FormSearch from '../../components/FormSearch'

// const BASE_CLASS = `sui-MoviesApp`
// const CLASS_HOME = `${BASE_CLASS}-homePage`

const HomePage = (_, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <FormSearch />
  </React.Fragment>
)

HomePage.contextTypes = {i18n: PropTypes.object}

export default HomePage
