import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import FormSearch from '../../components/FormSearch'
import './index.scss'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_HOME = `${BASE_CLASS}-homePage`

const HomePage = (_, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <div className={CLASS_HOME}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {i18n.t('HOME_TITLE')}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <div>
        <Grid container spacing={16} justify="center">
          <FormSearch />
        </Grid>
      </div>
    </div>
  </React.Fragment>
)

HomePage.contextTypes = {i18n: PropTypes.object}

export default HomePage
