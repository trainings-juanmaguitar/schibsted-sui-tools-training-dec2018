import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    const {i18n} = this.props
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

Home.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}
Home.propTypes = {i18n: PropTypes.object}

Home.getInitialProps = async ({context, routeInfo}) => {
  const {i18n} = context

  return {i18n}
}

export default Home
