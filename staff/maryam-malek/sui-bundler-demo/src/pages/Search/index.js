import React, {Component} from 'react'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

import Button from '@schibstedspain/sui-atom-button'

import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    query: '',
    students: []
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = async e => {
    const {domain} = this.context
    const students = await domain
      .get('search_students_use_case')
      .execute({query: this.state.query})
    this.setState({students})
  }

  render() {
    const {query, students} = this.state
    const {onChangeInput, showData} = this
    return (
      <div>
        <h1>Search student by name</h1>

        <MoleculeInputField
          id="name"
          placeholder="Write your name..."
          label="Name"
          value={query}
          onChange={onChangeInput('query')}
        />
        <Button type="primary" onClick={showData}>
          Show Data
        </Button>
        {students.length && (
          <ul>
            {students.map((student, i) => <li key={i}>{student.name}</li>)}
          </ul>
        )}
      </div>
    )
  }
}

Search.contextTypes = {domain: PropTypes.object}

export default Search
