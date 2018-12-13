import React from 'react'

import MoleculeInputField from '@s-ui/react-molecule-input-field'
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'

class Contact extends React.Component {
  state = this.initialState()

  initialState() {
    return {name: '', email: '', message: ''}
  }

  onChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  onChangeTextArea(e, type) {
    this.setState({[type]: e.value})
  }

  printState() {
    // eslint-disable-next-line
    console.log(this.state)
    this.setState(this.initialState())
  }

  render() {
    const {name, email, message} = this.state
    return (
      <div>
        <MoleculeInputField
          id="name"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={e => this.onChange(e)}
        />
        <MoleculeInputField
          id="email"
          placeholder="email"
          label="Email"
          value={email}
          onChange={e => this.onChange(e)}
        />
        <MoleculeTextareaField
          id="message"
          label="Message"
          value={message}
          maxChars={75}
          onChange={e => this.onChangeTextArea(e, 'message')}
        />
        <Button onClick={() => this.printState()}>Save</Button>
      </div>
    )
  }
}

export default Contact
