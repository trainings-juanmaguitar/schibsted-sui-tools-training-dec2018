import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class SearchResults extends Component {
  state = {
    students: []
  }
  async componentDidMount() {
    const {
      params: {query}
    } = this.props
    console.log(`query → ${query}`) // eslint-disable-line
    const {domain} = this.context
    const students = await domain
      .get('search_by_name_students_use_case')
      .execute({query})
    this.setState({students})
  }
  render() {
    const {students} = this.state
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>
          {i18n.t('SEARCH_RESULTS', {query: 'juanma', totalResults: 234})}
        </h1>
        {students &&
          students.length && (
            <ul>
              {students.map((student, i) => <li key={i}>{student.name}</li>)}
            </ul>
          )}
      </React.Fragment>
    )
  }
}

SearchResults.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default SearchResults
