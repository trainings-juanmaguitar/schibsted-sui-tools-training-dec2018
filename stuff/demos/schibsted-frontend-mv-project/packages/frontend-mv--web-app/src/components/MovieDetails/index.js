import React from 'react'
import PropTypes from 'prop-types'

import {
  Columns,
  Column,
  Card,
  CardHeader,
  CardHeaderTitle,
  Image,
  CardContent,
  Content
} from 'bloomer'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const MovieDetails = ({movie}, {router}) => {
  const imgStyles = {
    backgroundImage: `url(${movie.posterPath})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }
  return (
    <div className="MovieDetails">
      <div className="level">
        <a
          href="#"
          onClick={() => {
            router.goBack()
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </a>
      </div>
      <Columns>
        <Column isSize={6}>
          <Image isRatio="square" style={imgStyles} />
        </Column>
        <Column>
          <Card>
            <CardHeader>
              <CardHeaderTitle>{movie.title}</CardHeaderTitle>
            </CardHeader>

            <CardContent>
              <Content>
                {movie.overview}
                <br />
                <small>{movie.release}</small>
              </Content>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </div>
  )
}
MovieDetails.propTypes = {movie: PropTypes.object}
MovieDetails.contextTypes = {router: PropTypes.object}

export default MovieDetails
