import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AtomCard extends Component {
  render() {
    const {title, img, language, releaseDate, overview, genres} = this.props
    return (
      <div className="sui-AtomCard">
        <h1>{title}</h1>
        <div className="sui-AtomCard_details">
          <img src={img} />
          <div className="sui-AtomCard_details_text">
            <h3>{language}</h3>
            <h3>{releaseDate}</h3>
            <ul>{genres.map((genre, i) => <li key={i}>{genre.name}</li>)}</ul>
          </div>
        </div>
        <p>{overview}</p>
      </div>
    )
  }
}

AtomCard.displayName = 'AtomCard'

// Remove these comments if you need
// AtomCard.contextTypes = {i18n: PropTypes.object}
AtomCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  language: PropTypes.string,
  releaseDate: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string
}
// AtomCard.defaultProps = {}

export default AtomCard
