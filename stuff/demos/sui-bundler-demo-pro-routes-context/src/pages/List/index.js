import React, {Component} from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  state = {
    students: []
  }

  async componentDidMount() {
    const {domain} = this.context
    const students = await domain.get('list_students_use_case').execute()
    this.setState({students})
  }

  render() {
    const {students} = this.state
    return (
      <React.Fragment>
        <h1>List</h1>
        {students.length && (
          <ul>{students.map(student => <li>{student.name}</li>)}</ul>
        )}
      </React.Fragment>
    )
  }
}

// = (props, context) => {
//   console.log(context) // eslint-disable-line
// }

List.contextTypes = {domain: PropTypes.object}

export default List
