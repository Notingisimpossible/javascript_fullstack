const { querySql, queryOne } = require('../db')

function login(username, password) {
  return querySql(`select * from adminUser where username='${username}' and password='${password}'`)
}

function findUser(username) {
  return queryOne(`select id, username, nickname, role, avatar from adminUser where username='${username}'`)
}

module.exports = {
  login,
  findUser
}