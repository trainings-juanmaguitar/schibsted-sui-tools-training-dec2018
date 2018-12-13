import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import AtomTextarea from '@s-ui/react-atom-textarea'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    nameValError: '',
    emailValError: ''
  }

  handleOnChangeName = ev => {
    this.setState({
      name: ev.target.value
    })
  }

  handleOnChangeEmail = ev => {
    this.setState({
      email: ev.target.value
    })
  }

  handleOnChangeDesc = ev => {
    this.setState({message: ev.target.value})
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({})

    const {name, email} = this.state
    let existsError = false
    let nameValError
    let emailValError

    if (!name.length || name === undefined) {
      nameValError = 'The name cant be empty'
      existsError = true
    }

    if (!email.length || name === undefined) {
      emailValError = 'The name cant be empty'
      existsError = true
    }
    if (existsError) this.setState({emailValError, nameValError})
    else {
      console.log(
        `Name: ${this.state.name}\nMessage: ${this.state.message}\nEmail: ${
          this.state.email
        }\n`
      )
      this.handleReset()
    }
  }

  handleReset = ev => {
    this.setState({
      name: '',
      message: '',
      email: '',
      emailValError: '',
      nameValError: ''
    })
  }

  render() {
    const {name, message, email} = this.state
    return (
      <form
        className="MyForm"
        onSubmit={ev => {
          this.handleSubmit(ev)
        }}
      >
        <div className="group-field">
          <MoleculeInputField
            placeholder="Name"
            label="Name"
            value={name}
            errorText={this.state.nameValError}
            onChange={this.handleOnChangeName}
          />
        </div>
        <div className="group-field">
          <MoleculeInputField
            placeholder="Email"
            label="Email"
            errorText={this.state.emailValError}
            value={email}
            onChange={this.handleOnChangeEmail}
          />
        </div>
        <div className="group-field">
          <AtomTextarea
            placeholder="Write a message"
            value={message}
            onChange={this.handleOnChangeDesc}
          />
        </div>
        <div className="group-field">
          <Button onClick={this.handleSubmit}>Send</Button>
          <Button isButton onClick={this.handleReset}>
            Reset
          </Button>
        </div>
      </form>
    )
  }
}

export default Form
