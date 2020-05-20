const mysql = require('mysql')
const config = require('./config')
const { debug }  = require('../utils/constant')


function connect() {
  return mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true // 允许sql查询语句中存在多条查询
  })
}

function querySql(sql) {
  const conn = connect()
  debug && console.log(sql)
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, result) => {
        if(err){
          debug && console.log('查询失败，原因：', JSON.stringify(err))
          reject(err)
        }else{
          debug && console.log('查询成功', result)
          resolve(result)
        }
      })
    } catch (error) {
      reject(error)
    } finally{
      conn.end() //释放连接池
    }
  })
}

module.exports = {
  querySql
}