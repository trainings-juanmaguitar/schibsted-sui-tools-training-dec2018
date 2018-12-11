/* eslint-disable no-console */
import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'

const BASE_CLASS = 'MyApp'

class Form extends Component {
  state = {
    name: '',
    email: '',
    text: ''
  }

  handleChangeName = event => {
    this.setState({name: event.target.value})
  }

  handleChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  handleChangeText = ({value}) => {
    this.setState({text: value})
  }

  handleSendInfo = event => {
    event.preventDefault()
    console.log(
      'Your name is: ' +
        this.state.name +
        '\nYour email is: ' +
        this.state.name +
        '\nYour message is: ' +
        this.state.text
    )
  }

  render() {
    return (
      <form className={BASE_CLASS} onSubmit={this.handleSendInfo}>
        <MoleculeInputField
          id="Name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChangeName}
        />

        <MoleculeInputField
          id="Email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />

        <MoleculeTextareaField
          id="description"
          label="Message"
          onChange={this.handleChangeText}
          maxChars={140}
        />

        <Button size="small" type="secondary" isSubmit>
          Send Info
        </Button>
      </form>
    )
  }
}

export default Form
