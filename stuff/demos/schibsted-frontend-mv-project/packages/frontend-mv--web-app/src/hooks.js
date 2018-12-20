import TYPES from '@s-ui/ssr/hooks-types'

export default {
  [TYPES.LOGGING]: (req, res, next) => {
    console.log('hooks...') // eslint-disable-line
    console.log(req.url) // eslint-disable-line
    next()
  }
}
