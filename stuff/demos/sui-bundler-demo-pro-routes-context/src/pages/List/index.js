import React from 'react'
import PropTypes from 'prop-types'

const List = (props, context) => {
  console.log(context)
  return (
    <React.Fragment>
      <h1>List</h1>
    </React.Fragment>
  )
}

List.contextTypes = {name: PropTypes.string}

export default List
