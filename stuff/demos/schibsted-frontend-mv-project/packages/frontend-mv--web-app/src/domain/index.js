/* global fetch */
require('isomorphic-fetch')

module.exports = {
  users: () =>
    fetch('https://jsonplaceholder.typicode.com/users').then(resp =>
      resp.json()
    ),
  user: id =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp =>
      resp.json()
    )
}
