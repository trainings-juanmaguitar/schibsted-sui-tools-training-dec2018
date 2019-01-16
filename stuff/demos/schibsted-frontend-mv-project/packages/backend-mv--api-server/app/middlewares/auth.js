
const { asyncMiddleware, getTokenFromHeaders } = require("../helpers")
const { getCurrentUserService, verifyToken } = require("../services")

const authMiddleware = asyncMiddleware(async (req, res, next) => {
  const { COOKIE_SESSION_NAME } = req.app.locals
  const { cookies } = req
  const cookie = cookies && cookies[COOKIE_SESSION_NAME]

  if (cookie) {
    const {token: tokenFromCookie} = JSON.parse(cookie)
    token = tokenFromCookie
  }
  else {
    token  = getTokenFromHeaders(req)
  }
  
  if (!token) {
    req.user = null
    next()
    return
  }
  
  const [errDecodedToken, decodedToken] = await verifyToken({token})

  if (errDecodedToken) {
    res.json({ user: null, err: errDecodedToken })
    return
  }
  const { uid } = decodedToken

  const [errUserDB, userDB] = await getCurrentUserService({ uid })

  if (errUserDB) {
    res.json({ user: null, err: errUserDB })
    return
  }
  req.user = userDB.val()
  next()
})

module.exports = { authMiddleware }
