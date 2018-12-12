import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import Input from '@s-ui/react-atom-input'

class App extends Component {
  state = {
    name: {
      value: '',
      errorState: null
    },
    email: {
      value: '',
      errorState: null
    },
    username: {
      value: '',
      errorState: null
    },
    password: {
      value: '',
      errorState: null
    },
    confirm_password: {
      value: '',
      errorState: null
    }
  }

  isEmail(value) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(value)
  }

  handleChange = ({value, field}) => {
    this.setState(
      Object.assign({}, this.state, {
        [field]: {
          value,
          errorState: null
        }
      })
    )
  }

  handleBlur = ({value, field}) => {
    let errorState = !this.isEmail(value)
    this.setState({
      [field]: {errorState, value}
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Register</h1>
        <form className="form">
          <Input
            name="name"
            className="form__input"
            type="text"
            value={this.state.name.value}
            onChange={({event, value}) =>
              this.handleChange({value, field: 'name', event})
            }
            onBlur={event =>
              this.handleBlur({
                value: event.target.value,
                field: 'name'
              })
            }
            errorState={this.state.name.errorState}
            placeholder="Full Name"
          />
          <Input
            name="email"
            className="form__input"
            type="email"
            value={this.state.email.value}
            onChange={({event, value}) =>
              this.handleChange({value, field: 'email', event})
            }
            onBlur={event =>
              this.handleBlur({
                value: event.target.value,
                field: 'email'
              })
            }
            errorState={this.state.email.errorState}
            placeholder="Email"
          />
          <Input
            name="username"
            className="form__input"
            type="text"
            value={this.state.username.value}
            onChange={({event, value}) =>
              this.handleChange({value, field: 'username', event})
            }
            onBlur={event =>
              this.handleBlur({
                value: event.target.value,
                field: 'username'
              })
            }
            errorState={this.state.username.errorState}
            placeholder="Username"
          />
          <Input
            name="password"
            className="form__input"
            type="sui-password"
            value={this.state.password.value}
            onChange={({event, value}) =>
              this.handleChange({value, field: 'password', event})
            }
            onBlur={event =>
              this.handleBlur({
                value: event.target.value,
                field: 'password'
              })
            }
            errorState={this.state.password.errorState}
            placeholder="Password"
          />
          <Input
            name="confirm_password"
            className="form__input"
            type="sui-password"
            value={this.state.confirm_password.value}
            onChange={({event, value}) =>
              this.handleChange({value, field: 'confirm_password', event})
            }
            onBlur={event =>
              this.handleBlur({
                value: event.target.value,
                field: 'confirm_password'
              })
            }
            errorState={this.state.confirm_password.errorState}
            placeholder="Confirm password"
          />
          <Button className="form__button" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default App
