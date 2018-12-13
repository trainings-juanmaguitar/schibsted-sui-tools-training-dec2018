import React, {Component} from 'react'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Form extends Component {
  state = {error: null, name: '', mail: '', message: ''}

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
    console.log(this.state.name)
    console.log(this.state.mail)
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <MoleculeInputField
          className="hola"
          id="second"
          label="Name"
          onChange={this.handleNameChange}
        />
        <MoleculeInputField
          id="third"
          label="Mail"
          onChange={this.handleMailChange}
        />
        <MoleculeTextareaField
          id="description"
          label="Message"
          onChange={this.handleMessageChange}
        />
        <Button onClick={this.handleSubmit}>Send</Button>
      </div>
    )
  }
}

export default Form
