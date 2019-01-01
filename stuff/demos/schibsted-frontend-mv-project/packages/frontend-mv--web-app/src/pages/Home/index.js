import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Page from '../../hoc/Page'
import FormSearch from '../../components/FormSearch'

import {Title, Subtitle} from 'bloomer'

// const BASE_CLASS = `sui-MoviesApp`
// const CLASS_HOME = `${BASE_CLASS}-home`

const Home = (_, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <Title>{i18n.t('HOME_TITLE')}</Title>
    <Subtitle>{i18n.t('HOME_DESCRIPTION')}</Subtitle>
    <FormSearch />
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Page(Home)
