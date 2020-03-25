const http = require('http')

// http.Server 类
// new http.Server()
// http.createServer()
const server = http.createServer()

// request: 客户端请求对象，保存了与当前这次请求的客户端相关的信息(http.IncomiMessage)
// response: 服务端输出对象，提供了服务端输出的一些方法
server.on('request', (request, resopnse) => {
  console.log('接收到了请求')
  // 向客户端返回数据
  // request对象本质上是net.socket+http协议增加的一些内容
  // request.socket = net.socket
  console.log(request.socket.remoteAddress)
  // request.url
  // 我们可以根据这个url判断用户想要什么
  switch(request.url) {
    case '/': 
      resopnse.write('Index')
      break;
    case '/list': 
      resopnse.write('list')
      break;
    case '/view':
      resopnse.write('view')
      break;
    default:
      break;
  }
  resopnse.end()
})
// 80默认，约定， 给htpp
server.listen(8000, '127.0.0.1')