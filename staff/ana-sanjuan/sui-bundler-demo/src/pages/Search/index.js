import React, {Component} from 'react'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import Button from '@schibstedspain/sui-atom-button'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    name: '',
    students: []
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = async e => {
    const {domain} = this.context
    const students = await domain
      .get('search_students_by_name_use_case')
      .execute({query: this.state.name})

    this.setState({students})
  }

  render() {
    const {onChangeInput, showData} = this
    const {name} = this.state
    return (
      <React.Fragment>
        <div>
          <h1>Search</h1>
          <MoleculeInputField
            id="name"
            placeholder="Search by name..."
            label="Name"
            value={name}
            onChange={onChangeInput('name')}
          />
          <Button type="primary" onClick={showData}>
            Show Data
          </Button>
        </div>
        <ul>
          {this.state.students.map((student, i) => (
            <li key={i}>{student.name}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object}

export default Search
