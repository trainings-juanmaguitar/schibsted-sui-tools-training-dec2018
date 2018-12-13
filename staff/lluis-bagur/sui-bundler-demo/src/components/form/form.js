import React from 'react'
import Button from '@schibstedspain/sui-atom-button'
import AtomTextarea from '@s-ui/react-atom-textarea'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import './form.scss'

class Form extends React.Component {
  state = {name: '', email: '', message: ''}

  onChangeInput = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  onChangeTextarea = field => (e, {value}) => {
    this.setState({[field]: value})
  }

  showData = e => {
    window.alert(this.state)
  }

  render() {
    const {name, email, message} = this.state
    const {onChangeInput, onChangeTextarea} = this

    return (
      <div>
        <form className="myForm">
          <MoleculeInputField
            id="first"
            placeholder="Medium Input"
            label="Name"
            value={name}
            onChange={onChangeInput('name')}
          />
          <MoleculeInputField
            id="second"
            placeholder="Medium Input"
            leftAddon="http://"
            rightAddon="@schibsted.com"
            label="Mail"
            value={email}
            onChange={onChangeInput('email')}
          />

          <AtomTextarea
            onChange={onChangeTextarea('message')}
            placeholder="Write something cool here..."
            value={message}
          />

          <Button onClick={this.showData}>Primary with onClick</Button>
        </form>
      </div>
    )
  }
}
export default Form
