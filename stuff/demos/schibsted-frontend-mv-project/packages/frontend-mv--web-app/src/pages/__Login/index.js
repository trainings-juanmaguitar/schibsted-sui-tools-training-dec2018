/* eslint-disable */

import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import FirebaseAuth from 'react-firebaseui/FirebaseAuth'

class LoginPage extends Component {
  state = {
    isSignedIn: undefined
  }

  componentDidMount() {
    const {firebaseApp} = this.props
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged(user => {
        console.log('onAuthStateChanged...') // eslint-disable-line
        console.log(user) // eslint-disable-line
        this.setState({isSignedIn: !!user})
      })
  }
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const {uiConfig, firebaseApp} = this.props
    const {isSignedIn} = this.state
    const isDisplayLogForm = isSignedIn !== undefined && !isSignedIn
    console.log({isSignedIn, isDisplayLogForm}) // eslint-disable-line
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Login</h1>
        {isDisplayLogForm && (
          <div>
            <FirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebaseApp.auth()}
            />
          </div>
        )}
        {isSignedIn && (
          <div>
            Hello. You are now logged! signed In!
            <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
          </div>
        )}
      </React.Fragment>
    )
  }
}

LoginPage.contextTypes = {i18n: PropTypes.object}
LoginPage.propTypes = {
  firebaseApp: PropTypes.object,
  uiConfig: PropTypes.object
}

LoginPage.renderLoading = () => <h1>Loading...</h1>

LoginPage.getInitialProps = async ({context}) => {
  const {domain} = context
  const config = domain.get('config')

  const firebase = config.get('firebase')
  const firebaseApp = config.get('firebaseApp')

  console.log(firebase.auth)
  console.log(firebase.auth.GoogleAuthProvider)
  console.log(firebase.auth.CredentialHelper)

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

  console.log(firebaseApp.auth()) // eslint-disable-line

  firebaseApp.auth().onAuthStateChanged(function(user, ...params) {
    console.log('onAuthStateChanged...') // eslint-disable-line
    console.log(`user → ${user}`)
    console.log(params)
    if (user) {
      console.log('hay user!') // eslint-disable-line
      console.log(user) // eslint-disable-line
    } else {
      console.log('not user...') // eslint-disable-line
    }
  })

  return {
    uiConfig,
    firebaseApp
  }
}

export default LoginPage
