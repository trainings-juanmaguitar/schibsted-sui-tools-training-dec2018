const express = require('express');

const getCurrentUser = require('./handlers/getCurrentUser')
const getFavoritesCurrentUser = require('./handlers/getFavoritesCurrentUser')

let router = express.Router();

router.route('/current').get( getCurrentUser )
router.route('/current/favorites').get( getFavoritesCurrentUser )

module.exports = router;