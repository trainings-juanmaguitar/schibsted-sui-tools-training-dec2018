import React, {Component} from 'react'
import Link from 'react-router/lib/Link'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import Button from '@schibstedspain/sui-atom-button'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    name: '',
    movies: []
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = async e => {
    const {domain} = this.context
    const movies = await domain
      .get('search_movies_by_name_use_case')
      .execute({query: this.state.name})

    this.setState({movies})
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Search your favourite movies</h1>
          <MoleculeInputField
            id="name"
            placeholder="Search by name..."
            label="Name"
            value={this.state.name}
            onChange={this.onChangeInput('name')}
          />
          <Button type="primary" onClick={this.showData}>
            Show Data
          </Button>
        </div>
        <ul>
          {this.state.movies.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object}

export default Search
