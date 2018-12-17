/**
 * @function
 * @param {Object} deps
 * @param {String} deps.prefix
 * */

const isClient = typeof window !== 'undefined'
const isNotTest = process && process.env && process.env.NODE_ENV  && process.env.NODE_ENV !== 'test'

const factoryLogger = ({prefix} = {}) => {
  return message => {
    /* eslint-disable */
    isClient && isNotTest &&
      console.log(
        `%c${+new Date()} %cmv:${prefix} → %c${message}`,
        'color:green',
        'color:blue',
        'font-weight: bold'
      )
  }
}

export default factoryLogger
