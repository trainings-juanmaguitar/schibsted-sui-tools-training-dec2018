const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const usersRoutes = require('./routes/users');
const favoritesRoutes = require('./routes/favorites');
const allRoutes = require('./routes/all');

const {authMiddleware} = require('./middlewares/auth');

require('dotenv').load()
const {
  THEMOVIEDB_API_KEY,
  THEMOVIEDB_API_BASE_URL,
  COOKIE_SESSION_NAME
} = process.env

const app = express();

app.locals.COOKIE_SESSION_NAME = COOKIE_SESSION_NAME
app.locals.THEMOVIEDB_API_KEY = THEMOVIEDB_API_KEY
app.locals.THEMOVIEDB_API_BASE_URL = THEMOVIEDB_API_BASE_URL

app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use(authMiddleware)

app.use('/users', usersRoutes)
app.use('/favorites', favoritesRoutes)
app.use('*', allRoutes)

module.exports = app;