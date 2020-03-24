const http = require('http')

// http.Server 类
// new http.Server()
// http.createServer()
const server = http.createServer()

server.on('request', () => {
  console.log('接收到了请求')
})
// 80默认，约定， 给htpp
server.listen(8000, '127.0.0.1')