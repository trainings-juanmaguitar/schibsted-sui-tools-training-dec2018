import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {name: '', mail: '', message: ''}

  handleNameChange = event => {
    const name = event.target.value
    this.setState({name})
  }

  handleMailChange = event => {
    const mail = event.target.value
    this.setState({mail})
  }

  handleMessageChange = ({value}) => {
    this.setState({message: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    window.alert(
      `${this.state.name} with e-mail ${
        this.state.mail
      } send the next message: ${this.state.message}`
    )
  }

  render() {
    return (
      <div className="form-container">
        <MoleculeInputField
          id="second"
          placeholder="Insert your name"
          label="Name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          id="second"
          placeholder="Insert your email"
          rightAddon="@mail.com"
          label="Mail"
          onChange={this.handleMailChange}
        />
        <MoleculeTextareaField
          id="description"
          label="Message"
          maxChars={75}
          onChange={this.handleMessageChange}
        />
        <Button type="accent" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default Form
