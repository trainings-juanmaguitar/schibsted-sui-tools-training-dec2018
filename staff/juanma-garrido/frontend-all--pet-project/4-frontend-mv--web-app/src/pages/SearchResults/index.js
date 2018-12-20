import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class SearchResults extends Component {
  render() {
    const {i18n, movies} = this.props
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>
          {i18n.t('SEARCH_RESULTS', {query: 'juanma', totalResults: 234})}
        </h1>
        {movies &&
          movies.length && (
            <ul>{movies.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
          )}
      </React.Fragment>
    )
  }
}

SearchResults.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}
SearchResults.propTypes = {
  movies: PropTypes.array,
  i18n: PropTypes.object
}

SearchResults.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context

  const {
    params: {query}
  } = routeInfo

  console.log(`query → ${query}`) // eslint-disable-line

  const movies = await domain.get('search_movies_use_case').execute({query})

  return {
    movies,
    i18n
  }
}
export default SearchResults
