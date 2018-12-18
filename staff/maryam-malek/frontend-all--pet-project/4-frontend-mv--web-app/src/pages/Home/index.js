import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class MovieDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Home</h1>
      </React.Fragment>
    )
  }
}

MovieDetail.contextTypes = {domain: PropTypes.object}

export default MovieDetail
