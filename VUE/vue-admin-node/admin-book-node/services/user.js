const {querySql, queryOne} = require('../db/index')

function login(username, password) {
  let sql = `select * from adminUser where username='${username}' and password='${password}'`
  return querySql(sql)
}
function findUser(username) {
  let sql = `select id, username, nickname, role, avatar from adminUser where username='${username}'`
  return queryOne(sql)
}
module.exports = {
  login,
  findUser
}