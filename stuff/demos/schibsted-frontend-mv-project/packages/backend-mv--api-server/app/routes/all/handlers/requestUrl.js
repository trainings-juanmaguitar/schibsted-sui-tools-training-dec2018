const URL = require('url').URL
const { getAndCache } = require('../../../helpers')

let counter = 0

const requestUrl = async (req, res) => {
  const urlRequested = req.originalUrl
  const { THEMOVIEDB_API_BASE_URL, THEMOVIEDB_API_KEY } = req.app.locals
  console.log("-".repeat(20))
  console.log(`→ Attempt ${++counter}`)
  console.log("path requested = " + urlRequested)

  const isFavicon = urlRequested.includes("favicon.ico")
  const isMovieDbApiUrl = urlRequested.includes(THEMOVIEDB_API_BASE_URL)

  if (isFavicon || !isMovieDbApiUrl) {
    res.status(500).send("Couldn't get a JSON!")
    return
  }

  const url = new URL(`https://${urlRequested}`)
  url.searchParams.append("api_key", THEMOVIEDB_API_KEY)

  const results = await getAndCache(url.href)
  res.json(results)
}

module.exports = requestUrl
