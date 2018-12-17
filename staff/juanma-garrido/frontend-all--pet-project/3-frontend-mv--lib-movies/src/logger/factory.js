/**
 * @function
 * @param {Object} deps
 * @param {String} deps.prefix
 * */

const isClient = typeof window !== 'undefined'

const factoryLogger = ({prefix} = {}) => {
  return message => {
    /* eslint-disable */
    isClient &&
      console.log(
        `%c${+new Date()} %cmv:${prefix} → %c${message}`,
        'color:green',
        'color:blue',
        'font-weight: bold'
      )
  }
}

export default factoryLogger
