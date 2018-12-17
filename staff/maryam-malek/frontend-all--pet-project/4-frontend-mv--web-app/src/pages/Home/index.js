import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    movies: []
  }
  async componentDidMount() {
    const {domain} = this.context
    const movies = await domain.get('list_popular_movies_use_case').execute()
    console.log(movies) // eslint-disable-line
    this.setState({movies})
  }
  render() {
    const {movies} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Home</h1>
        {movies.length && (
          <ul>{movies.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
        )}
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object}

export default Home
