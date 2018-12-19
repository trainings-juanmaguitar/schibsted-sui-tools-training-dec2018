import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import Button from '@schibstedspain/sui-atom-button'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    query: '',
    movies: []
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = async e => {
    const {domain} = this.context
    const movies = await domain
      .get('search_movies_use_case')
      .execute({query: this.state.query})
    this.setState({movies})
  }

  render() {
    const {query, movies} = this.state
    const {onChangeInput, showData} = this
    const {i18n} = this.context
    return (
      <div>
        <h1>{i18n.t('SEARCH_RESULTS')}</h1>

        <MoleculeInputField
          id="name"
          placeholder="Write the title you want to search..."
          label="Name"
          value={query}
          onChange={onChangeInput('query')}
        />
        <Button type="primary" onClick={showData}>
          Show Movies
        </Button>
        {movies.length && (
          <ul>
            {movies.map((movie, i) => (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default Search
