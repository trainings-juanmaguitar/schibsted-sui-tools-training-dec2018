import React, {Component} from 'react'
import Input from '@s-ui/react-molecule-input-field'
import Textarea from '@s-ui/react-molecule-textarea-field'
import Button from '@schibstedspain/sui-atom-button'
import './index.scss'

class Form extends Component {
  state = {
    name: '',
    mail: '',
    message: ''
  }

  handleChangeInput = ({target}) => {
    this.setState({[target.id]: target.value})
  }

  handleChangeTextarea = field => ({value}) => {
    this.setState({[field]: value})
  }

  handleSubmit = () => {
    console.log(this.state) // eslint-disable-line no-console
  }

  render() {
    return (
      <section className="form">
        <Input
          id="name"
          placeholder="Write your name..."
          label="Name"
          value={this.state.name}
          onChange={this.handleChangeInput}
        />
        <Input
          id="mail"
          placeholder="Write your mail..."
          label="Mail"
          value={this.state.mail}
          onChange={this.handleChangeInput}
        />
        <Textarea
          id="message"
          value={this.state.message}
          onChange={this.handleChangeTextarea('message')}
          label="Message"
        />
        <Button onClick={this.handleSubmit}>Send</Button>
      </section>
    )
  }
}

export default Form
