import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class List extends Component {
  state = {
    student: null
  }
  async componentDidMount() {
    const {domain} = this.context
    const student = await domain
      .get('search_student_use_case')
      .execute('francisco')
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
        {student.name}
      </React.Fragment>
    )
  }
}

List.contextTypes = {domain: PropTypes.object}

export default List
