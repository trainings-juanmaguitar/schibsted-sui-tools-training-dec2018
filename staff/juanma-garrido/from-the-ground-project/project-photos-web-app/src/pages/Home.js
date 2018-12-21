import React from 'react'
import Helmet from 'react-helmet'

const Home = (
  {photos} // eslint-disable-line
) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>Home test title</h1>
    <ul>{photos.map((photo, i) => <li key={i}>{photo.title}</li>)}</ul>
  </React.Fragment>
)

Home.getInitialProps = async ({context}) => {
  const {domain} = context
  const photos = await domain.get('get_all_photos_use_case').execute()
  return {photos}
}
export default Home
