/* eslint-disable */
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import MoleculePagination from '@s-ui/react-molecule-pagination'

class PopularMovies extends Component {

  onSelectPage = async (e, {page}) => {
    this.props.router.push(`/popular_movies/${page}`)
  }

  onSelectNext = async (e, {page}) => {
    this.props.router.push(`/latest_movies/${page}`)
  }

  onSelectPrev = async (e, {page}) => {
    this.props.router.push(`/latest_movies/${page}`)
  }

  render() {
    
    const {movies, actualPage, totalPages, totalResults} = this.props
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('POPULAR_MOVIES_TITLE', {query: totalResults})}</h1>
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
      </React.Fragment>
    )
  }
}

PopularMovies.contextTypes = {
  domain: PropTypes.object,
  i18n: PropTypes.object,
  movies: PropTypes.array,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number
}

PopularMovies.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const {params: {page}} = routeInfo
  const {movies, actualPage, totalPages, totalResults} = await domain
    .get('list_popular_movies_use_case')
    .execute({page})

  return {
    movies: movies || [],
    actualPage,
    totalPages,
    totalResults
  }
}
PopularMovies.renderLoading = () => <h1>...</h1>

export default PopularMovies
