import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import FormSearch from '../../components/FormSearch'

import {Title, Subtitle} from 'bloomer'

// const BASE_CLASS = `sui-MoviesApp`
// const CLASS_HOME = `${BASE_CLASS}-homePage`

const HomePage = (_, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <Title>Section</Title>
    <Subtitle>
      {' '}
      A simple container to divide your page into <strong>sections</strong>,
      like the one you're currently reading
    </Subtitle>
    <FormSearch />
  </React.Fragment>
)

HomePage.contextTypes = {i18n: PropTypes.object}

export default HomePage
