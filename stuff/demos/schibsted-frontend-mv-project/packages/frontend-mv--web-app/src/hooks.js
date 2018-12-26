import TYPES from '@s-ui/ssr/hooks-types'

console.log(`Este server está funcionando en ${process.env.NODE_ENV}`)

export default {
  [TYPES.LOGGING]: (req, res, next) => {
    console.log(req.url)
    console.log(req.uri)
    next()
  }
}