import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import MoleculeInputField from '@s-ui/react-molecule-input-field'

class Form extends Component {
  state = {error: null, name: null, mail: null, message: 'message'}

  handleNameChange = event => {
    const name = event.target.value
    this.setState({name})
  }

  handleMailChange = event => {
    const mail = event.target.value
    this.setState({mail})
  }

  handleMessageChange = event => {
    const message = event.value
    this.setState({message})
  }

  handleSubmit = () => {
    window.alert(
      'Your name is ' +
        this.state.name +
        ' your email is ' +
        this.state.mail +
        ' and here is your message: ' +
        this.state.message
    )
  }

  render() {
    return (
      <div>
        <MoleculeInputField label="Name" onChange={this.handleNameChange} />
        <MoleculeInputField label="Mail" onChange={this.handleMailChange} />
        <MoleculeTextareaField
          label="Message"
          onChange={this.handleMessageChange}
        />
        <Button label="Submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default Form
