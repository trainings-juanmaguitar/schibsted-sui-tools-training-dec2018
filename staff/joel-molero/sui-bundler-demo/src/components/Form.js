import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {
    name: '',
    mail: '',
    text: ''
  }

  onChange = ({value}) => {
    this.setState({value})
  }

  onSubmit = ({e}) => {
    e.preventDefault()
    this.printData()
  }

  printData() {
    window.alert(
      `Your name is: ${this.state.name}. Your email is: ${
        this.state.mail
      }. Your text is: ${this.state.mail}.`
    )
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <MoleculeInputField
          id="input-name"
          label="Name"
          placeholder="Medium Input"
          value={this.state.name}
        />
        <MoleculeInputField
          id="input-mail"
          placeholder="yourname@mail.com"
          leftAddon="www."
          label="Mail"
          value={this.state.mail}
        />
        <MoleculeTextareaField
          id="description"
          label="Description"
          value={this.state.text}
          maxChars={250}
        />
        <Button type="submit">Send</Button>
      </form>
    )
  }
}

export default Form
