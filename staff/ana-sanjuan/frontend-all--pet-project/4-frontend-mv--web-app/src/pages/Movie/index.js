import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    movieDetails: {}
  }
  async componentDidMount() {
    const {domain} = this.context
    const {
      params: {id}
    } = this.props
    const movieDetails = await domain
      .get('get_movie_by_id_use_case')
      .execute({id})
    this.setState({movieDetails})
  }
  render() {
    const {title, overview, posterPath} = this.state.movieDetails
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{title}</h1>
        <img src={`${posterPath}`} alt="" />
        <p>{overview}</p>
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object}

export default Home
