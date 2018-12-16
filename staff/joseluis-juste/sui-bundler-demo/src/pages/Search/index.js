import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    students: []
  }

  async componentDidMount() {
    const {domain} = this.context
    const students = await domain
      .get('search_students_use_case')
      .execute(this.props.params.search)
    this.setState({students})
  }

  render() {
    const {students} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Home</h1>
        {students.length && (
          <ul>
            {students.map((student, i) => <li key={i}>{student.name}</li>)}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object}

export default Search
