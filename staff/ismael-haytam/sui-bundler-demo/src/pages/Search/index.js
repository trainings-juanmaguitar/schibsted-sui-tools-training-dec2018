import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Search extends React.Component {
  state = {students: []}

  async componentDidMount() {
    const query = this.props.params.name
    const {domain} = this.context
    const students = await domain
      .get('list_student_by_name_use_case')
      .execute({query})
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

Search.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string
  })
}

export default Search
