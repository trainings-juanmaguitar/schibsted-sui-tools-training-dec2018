import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'
/* eslint-disable no-debugger */
/* eslint-disable no-console */
class Form extends Component {
  state = {name: '', email: '', message: ''}

  onNameChange = event => {
    event.preventDefault()
    const name = event.target.value
    this.setState({name})
  }

  onEmailChange = event => {
    event.preventDefault()
    const email = event.target.value
    this.setState({email})
  }

  onDescriptionChange = ({value}) => {
    const message = value
    this.setState({message})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, email, message} = this.state
    console.log(name, email, message)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <AtomInput
          type="text"
          className="form__input"
          name="name"
          placeholder="name"
          onChange={this.onNameChange}
        />
        <AtomInput
          type="text"
          name="email"
          className="form__input"
          placeholder="email"
          onChange={this.onEmailChange}
        />

        <MoleculeTextareaField
          id="description"
          className="form__input"
          label="Description"
          onChange={this.onDescriptionChange}
        />
        <Button>Submit</Button>
      </form>
    )
  }
}

export default Form
