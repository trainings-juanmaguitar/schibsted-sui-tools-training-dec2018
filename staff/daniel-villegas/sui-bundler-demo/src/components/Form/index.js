import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'

class Form extends Component {
  state = {name: '', email: '', text: ''}

  handleNameChange = event => {
    const name = event.target.value

    this.setState({name})
  }

  handleEmailChange = event => {
    const email = event.target.value

    this.setState({email})
  }

  onChange = ({value}) => {
    const text = value
    this.setState({text})
  }

  handleSubmit = event => {
    event.preventDefault()

    const {name, email, text} = this.state

    window.alert(
      'user "' + name + '" with email "' + email + '" wrote: "' + text + '"'
    )
    this.setState({name: '', email: '', text: ''})
  }

  render() {
    return (
      <div>
        <MoleculeInputField
          id="name"
          label="Name"
          placeholder="Insert your name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          id="mail"
          label="email"
          placeholder="Insert your email"
          onChange={this.handleEmailChange}
        />
        <MoleculeTextareaField
          id="description"
          label="Text"
          maxChars={500}
          onChange={this.onChange}
        />
        <Button
          type="primary"
          className="sui-AtomButton sui-AtomButton--link"
          onClick={this.handleSubmit}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default Form
