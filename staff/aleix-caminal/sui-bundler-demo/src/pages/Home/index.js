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

  static propTypes = {
    router: PropTypes.object
  }

  async componentDidMount() {
    const students = await this.context.domain
      .get('list_students_use_case')
      .execute()

    this.setState({students})
  }

  async componentWillReceiveProps(props) {
    const {
      params: {query}
    } = props

    const students = await this.context.domain
      .get('search_by_name_students_use_case')
      .execute({query})

    this.setState({students})
  }

  handleSearchStudents = ({target}) => {
    if (target.value) {
      this.props.router.push(`/search/${target.value}`)
    } else {
      this.props.router.push('/')
    }
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
