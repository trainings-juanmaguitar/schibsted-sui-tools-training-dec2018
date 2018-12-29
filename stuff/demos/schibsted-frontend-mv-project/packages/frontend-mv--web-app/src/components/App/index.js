/* eslint-disable */
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {Container, Section} from 'bloomer'
import Navbar from '../Navbar'

import {UserContainer} from '../../state'

const App = ({children, user}) => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Helmet application" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>SPA MOCK</title>
    </Helmet>
    <Navbar user={user}/>
    <Container>
      <Section>{children}</Section>
    </Container>
  </div>
)

App.propTypes = {children: PropTypes.element, user: PropTypes.object}
App.renderLoading = () => <h1>Loading...</h1>

App.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  const user = await domain.get('current_users_use_case').execute()
  console.log(user)
  return {user}
}

export default App
