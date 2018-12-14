import React, {Component} from 'react'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {
    name: '',
    mail: '',
    message: ''
  }

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  onChangeTextarea = field => ({value}) => {
    this.setState({[field]: value})
  }

  showData = e => {
    console.log(this.state) // eslint-disable-line
  }

  render() {
    const {onChangeInput, onChangeTextarea, showData} = this
    const {name, mail, message} = this.state
    return (
      <div>
        <h1>Form</h1>

        <MoleculeInputField
          id="name"
          placeholder="Write your name..."
          label="Name"
          value={name}
          onChange={onChangeInput('name')}
        />
        <MoleculeInputField
          id="mail"
          placeholder="Write your mail..."
          label="Mail"
          value={mail}
          onChange={onChangeInput('mail')}
        />
        <MoleculeTextareaField
          id="message"
          value={message}
          onChange={onChangeTextarea('message')}
          label="Message"
        />
        <Button type="primary" onClick={showData}>
          Show Data
        </Button>
      </div>
    )
  }
}

export default Form
