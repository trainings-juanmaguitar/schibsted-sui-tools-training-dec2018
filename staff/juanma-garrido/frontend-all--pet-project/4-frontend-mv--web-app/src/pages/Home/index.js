import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    movies: []
  }
  async componentDidMount() {
    const {domain} = this.context
    const movies = await domain.get('get_popular_movies_use_case').execute()
    this.setState({movies})
  }
  render() {
    const {movies} = this.state
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('HOME_TITLE')}</h1>
        {movies.length && (
          <ul>{movies.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
        )}
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default Home
