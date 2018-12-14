import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello world, Home</h1>
      </div>
    )
  }
}

Home.contextTypes = {bootcamp: PropTypes.string}
export default Home
