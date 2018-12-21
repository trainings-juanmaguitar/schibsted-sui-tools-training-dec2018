import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import Button from '@schibstedspain/sui-atom-button'
import PropTypes from 'prop-types'
import MoleculePagination from '@s-ui/react-molecule-pagination'

class Search extends Component {
  state = {query: '', moviesList: {movies: []}}

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = async e => {
    console.log(this) //eslint-disable-line
    debugger //eslint-disable-line
    const {domain} = this.context
    const moviesList = await domain
      .get('search_movies_use_case')
      .execute({query: this.state.query, page: 1})
    this.setState({moviesList})
  }

  onSelectPage = async (e, {page}) => {
    const {domain} = this.context
    const moviesList = await domain
      .get('search_movies_use_case')
      .execute({query: this.state.query, page})
    this.setState({moviesList})
  }

  render() {
    const {
      query,
      moviesList: {movies, totalPages, totalResults, actualPage}
    } = this.state
    const {onChangeInput, showData} = this
    const {i18n} = this.context
    return (
      <div>
        <h1>Search movie by title</h1>
        {movies.length && (
          <h1>{i18n.t('SEARCH_RESULTS', {query: this.state.query})}</h1>
        )}

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
        {movies.length && (
          <MoleculePagination
            totalPages={totalPages}
            page={actualPage}
            // prevButtonIcon={prevButtonIcon}
            // nextButtonIcon={nextButtonIcon}
            // prevButtonText={prevButtonText}
            // nextButtonText={nextButtonText}
            // onSelectNext={onSelectNext}
            // onSelectPrev={onSelectPrev}
            onSelectPage={this.onSelectPage}
          />
        )}
        <h3>{totalPages}</h3>
        <h3>{totalResults}</h3>
        <h3>{actualPage}</h3>
      </div>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default Search
