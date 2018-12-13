import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {
    name: '',
    email: '',
    description: ''
  }

  onNameChange = ({value}) => {
    this.setState({name: value})
  }

  onEmailChange = ({value}) => {
    this.setState({email: value})
  }

  onDescriptionChange = ({value}) => {
    this.setState({description: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, email, description} = this.state
    window.alert(
      `Your name is: ${name}. Your email is: ${email}. Your descristion is: ${description}.`
    )
    this.setState({name: '', email: '', description: ''})
  }

  render() {
    const {name, email, description} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <MoleculeInputField
            id="second"
            placeholder="Input your name..."
            label="Name"
            value={name}
            onChange={this.onNameChange}
          />

          <MoleculeInputField
            id="second"
            placeholder="Input your email..."
            label="Email"
            value={email}
            onChange={this.onEmailChange}
          />

          <MoleculeTextareaField
            id="description"
            label="Mensaje"
            value={description}
            onChange={this.onDescriptionChange}
            maxChars={500}
          />

          <Button type="accent">Send </Button>
        </form>
      </div>
    )
  }
}

export default Form
