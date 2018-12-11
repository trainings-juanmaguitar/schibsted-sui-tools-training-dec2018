import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {name: '', email: '', message: ''}

  onSubmitClick = event => {
    event.preventDefault()
    window.alert('Click!')
  }

  handleNameChange = event => {
    const name = event.target.value
    this.setState({name})
  }

  handleEmailChange = event => {
    const email = event.target.value
    this.setState({email})
  }

  handleMessageChange = ({value}) => {
    this.setState({message: value})
  }

  render() {
    return (
      <div>
        <MoleculeInputField
          id="name"
          placeholder="Medium Input"
          label="Your name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          id="email"
          placeholder="Medium Input"
          label="Your email"
          onChange={this.handleEmailChange}
        />
        <MoleculeTextareaField
          id="message"
          label="Message"
          maxChars={100}
          onChange={this.handleMessageChange}
        />
        <Button onClick={this.onSubmitClick}>Submit</Button>
      </div>
    )
  }
}

export default Form
