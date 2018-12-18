import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import Link from 'react-router/lib/Link'

import './index.scss'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_LIST = `${BASE_CLASS}-listMovies`
const CLASS_CARD_MEDIA = `${BASE_CLASS}-cardMedia`

const MoviesList = ({movies}) => {
  console.log(movies) //eslint-disable-line
  return (
    <div className={CLASS_LIST}>
      {/* End hero unit */}
      <Grid container spacing={40}>
        {movies.map(movie => (
          <Grid item key={movie.id} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                className={CLASS_CARD_MEDIA}
                image={movie.posterPath}
                title="Image title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </Typography>
                <Typography>{movie.overview}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

MoviesList.propTypes = {movies: PropTypes.array}

export default MoviesList
