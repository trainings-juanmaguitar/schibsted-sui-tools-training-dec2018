import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class List extends Component {
  state = {
    students: []
  }
  async componentDidMount() {
    const {domain} = this.context
    const student = await domain
      .get('search_students_by_name_use_case')
      .execute()
    this.setState({student})
  }
  render() {
    const {student} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>List</h1>
        {student.length && <ul>{<li>{student.name}</li>}</ul>}
      </React.Fragment>
    )
  }
}

List.contextTypes = {domain: PropTypes.object}

export default List
