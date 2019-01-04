import React, {Component} from 'react'
import Helmet from 'react-helmet'
import to from 'await-to-js'

import {Container, Section} from 'bloomer'
import Navbar from '../components/Navbar'

export default Page =>
  class extends Component {
    static async getInitialProps(paramsPage) {
      const pageProperties =
        (await Page.getInitialProps) && (await Page.getInitialProps(paramsPage))
      const {
        context: {domain}
      } = paramsPage

      const cookies = domain.get('config').get('cookies')

      const [err, user] = await to(
        domain.get('get_logged_user_use_case').execute({cookies})
      )
      if (err) console.log(err) // eslint-disable-line
      return {...pageProperties, user}
    }

    render() {
      return (
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
          <Navbar {...this.props} />
          <Container>
            <Section>
              <Page {...this.props} />
            </Section>
          </Container>
        </div>
      )
    }
  }
