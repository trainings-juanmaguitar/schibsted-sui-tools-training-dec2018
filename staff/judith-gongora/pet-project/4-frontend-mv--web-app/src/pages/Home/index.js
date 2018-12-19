import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class MovieDetail extends Component {
  render() {
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('HOME_TITLE')}</h1>
      </React.Fragment>
    )
  }
}

MovieDetail.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default MovieDetail
