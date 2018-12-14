import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    students: []
  }

  static contextTypes = {
    domain: PropTypes.object
  }

  async componentDidMount() {
    const students = await this.context.domain
      .get('list_students_use_case')
      .execute()

    this.setState({students})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        {this.state.students &&
          this.state.students.length > 0 &&
          this.state.students.map((student, index) => (
            <p key={index}>{student.name}</p>
          ))}
      </React.Fragment>
    )
  }
}

export default Home
