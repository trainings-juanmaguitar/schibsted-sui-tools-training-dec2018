import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    student: ''
  }
  async componentDidMount() {
    const {domain} = this.context
    const student = await domain
      .get('search_student_use_case')
      .execute({query: 'manuelbarzi'})
    this.setState({student})
  }
  render() {
    const {student} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Home</h1>
        {student.length && <ul>{<li key={''}>{student.name}</li>}</ul>}
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object}

export default Home
