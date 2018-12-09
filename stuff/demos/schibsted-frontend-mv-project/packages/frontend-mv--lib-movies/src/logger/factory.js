/**
 * @function
 * @param {Object} deps
 * @param {String} deps.prefix
 * */
const factoryLogger = ({prefix} = {}) => {
  return message => {
    /* eslint-disable */
    window &&
      console.log(
        `%c${+new Date()} %cmv:${prefix} → %c${message}`,
        'color:green',
        'color:blue',
        'font-weight: bold'
      )
  }
}

export default factoryLogger
