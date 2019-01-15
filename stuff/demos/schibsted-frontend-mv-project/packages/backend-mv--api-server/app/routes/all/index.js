const express = require('express');
const requestUrl = require('./handlers/requestUrl')

let router = express.Router();

router.route('/')
  .get( requestUrl )

module.exports = router;