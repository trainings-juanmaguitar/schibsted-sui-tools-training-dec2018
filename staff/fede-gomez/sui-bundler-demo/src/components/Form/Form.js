/* eslint-disable no-console */

import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'

import './Form.scss'

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  nameChangeHandler = field => event => {
    this.setState({[field]: event.target.value})
  }

  emailChangeHandler = event => {
    this.setState({email: event.target.value})
  }

  messageChangeHandler = ({value}) => {
    this.setState({message: value})
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <MoleculeInputField
          className="inputName"
          id="first"
          placeholder="Name"
          label="Description"
          value={this.state.name}
          onChange={this.nameChangeHandler('name')}
        />
        <MoleculeInputField
          className="inputEmail"
          id="second"
          placeholder="eMail"
          label="Description"
          value={this.state.email}
          onChange={this.emailChangeHandler}
        />
        <MoleculeTextareaField
          className="inputMessage"
          id="message"
          label="Message"
          maxChars={75}
          onChange={this.messageChangeHandler}
        />

        <Button type="Submit" className="button" size="large">
          Send
        </Button>
      </form>
    )
  }
}

export default Form
