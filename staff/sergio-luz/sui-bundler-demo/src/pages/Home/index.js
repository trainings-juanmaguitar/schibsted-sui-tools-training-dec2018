import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    students: []
  }
  async componentDidMount() {
    const {domain} = this.context
    // const students = await domain.get('list_students_use_case').execute()
    const students = await domain.get('search_students_use_case').execute('a')
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

Home.contextTypes = {domain: PropTypes.object}

export default Home
