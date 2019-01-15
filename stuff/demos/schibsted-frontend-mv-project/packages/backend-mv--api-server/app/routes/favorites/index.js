const express = require('express');

const addFavorite = require('./handlers/addFavorite')
const removeFavorite = require('./handlers/removeFavorite')

let router = express.Router();

router.route('/:id')
  .post( addFavorite )
  .delete( removeFavorite )

module.exports = router;