import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import MoleculeInputField from '@s-ui/react-molecule-input-field'
import Button from '@schibstedspain/sui-atom-button'

import Link from 'react-router/lib/Link'

class App extends Component {
  state = {query: 'null'}

  handleChange = (event, {value: query}) => {
    this.setState({query})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {query} = this.state
    const {router} = this.context
    debugger // eslint-disable-line
    router.push(`/s/${query}`)
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Helmet application" />
          <title>SPA MOCK</title>
        </Helmet>
        <nav>
          <h1>Sui Movie App</h1>
          <div className="navOptions">
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/popular">
              Popular
            </Link>
            <MoleculeInputField
              onChange={this.handleChange}
              id="second"
              placeholder="film name"
              label="Search film by Name"
              inline
            />
            <div>
              <Button onClick={this.handleSubmit}>Search</Button>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {children: PropTypes.element}

App.contextTypes = {i18n: PropTypes.object, router: PropTypes.object}

export default App
