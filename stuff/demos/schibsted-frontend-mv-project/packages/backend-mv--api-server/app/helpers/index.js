const rp = require('request-promise')

const getAndCache = (function () {
  const cache = {}
  return url => {
    if (cache[url]) {
      console.log(`💾 from cache → ${url}`)
      return Promise.resolve(cache[url])
    } else {
      return rp(url, { json: true }).then(data => {
        console.log(`🔎 fresh request → ${url}`)
        cache[url] = data
        return data
      })
    }
  }
})()

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value)
}

const getTokenFromHeaders = ({headers: {authorization}}) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1]
  }
  return null
}


module.exports = {getAndCache, asyncMiddleware, getKeyByValue, getTokenFromHeaders}