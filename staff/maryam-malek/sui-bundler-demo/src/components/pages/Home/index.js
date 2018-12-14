import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {students: []}

  async componentDidMount() {
    const {domain} = this.context
    const students = await domain.get('list_students_user_case').execute()
    console.log(students) //eslint-disable-line
    this.setState({students})
  }

  render() {
    const {students} = this.state
    return (
      <React.Fragment>
        <h1>Home</h1>
        {students.length && (
          <ul>{students.map((student, i) => <li>student</li>)}</ul>
        )}
      </React.Fragment>
    )
  }
}
Home.contextTypes = {domain: PropTypes.object}

export default Home
