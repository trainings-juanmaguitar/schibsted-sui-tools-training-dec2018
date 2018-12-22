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

  onSelectNext = async (e, {page}) => {
    const {domain} = this.context
    const moviesList = await domain
      .get('search_movies_use_case')
      .execute({query: this.state.query, page})
    this.setState({moviesList})
  }

  onSelectPrev = async (e, {page}) => {
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
        <h1>{i18n.t('SEARCH_RESULTS_TITLE')}</h1>
        {!!movies.length && (
          <h1>
            {i18n.t('SEARCH_RESULTS', {
              query: this.state.query,
              total: totalResults
            })}
          </h1>
        )}

        <MoleculeInputField
          id="name"
          label={i18n.t('SEARCH_INPUT_TITLE')}
          value={query}
          onChange={onChangeInput('query')}
        />
        <Button type="primary" onClick={showData}>
          {i18n.t('SEARCH_BUTTON_TITLE')}
        </Button>
        {!!movies.length && (
          <ul>
            {movies.map((movie, i) => (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
        {!!movies.length && (
          <MoleculePagination
            totalPages={totalPages}
            page={actualPage}
            prevButtonText={i18n.t('PREV_BUTTON_TITLE')}
            nextButtonText={i18n.t('NEXT_BUTTON_TITLE')}
            onSelectNext={this.onSelectNext}
            onSelectPrev={this.onSelectPrev}
            onSelectPage={this.onSelectPage}
          />
        )}
      </div>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}
Search.renderLoading = () => <h1>...</h1>

export default Search
