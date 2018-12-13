/* eslint-disable */

const {default: Domain} = require('./lib')

const domain = new Domain()

console.log("hey!")

domain
  .get('list_students_use_case')
  .execute()
  .then(console.log)
