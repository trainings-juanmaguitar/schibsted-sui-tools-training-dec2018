import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AtomButton extends Component {
  render() {
    const {text} = this.props
    return (
      <div className="skylab-sui-AtomButton">
        <h1>AtomButton</h1>
        <p>This is my text → {text}</p>
      </div>
    )
  }
}

AtomButton.displayName = 'AtomButton'

// Remove these comments if you need
// AtomButton.contextTypes = {i18n: PropTypes.object}
AtomButton.propTypes = {
  text: PropTypes.string
}
// AtomButton.defaultProps = {}

export default AtomButton
