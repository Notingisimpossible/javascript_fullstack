const {querySql} = require('../db/index')

function login(username, password) {
  let sql = `select * from adminUser where username='${username}' and password='${password}'`
  return querySql(sql)
}

module.exports = {
  login
}