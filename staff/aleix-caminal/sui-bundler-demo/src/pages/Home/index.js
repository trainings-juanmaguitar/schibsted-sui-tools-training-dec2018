import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Students from '../../components/Students'

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

  async handleSearchStudents({target}) {
    const students = await this.context.domain
      .get('list_students_use_case')
      .execute({name: target.value})

    this.setState({students})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <Students
          students={this.state.students}
          onSearch={this.handleSearchStudents}
        />
      </React.Fragment>
    )
  }
}

export default Home
