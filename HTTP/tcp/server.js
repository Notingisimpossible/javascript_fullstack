// 在node中 tcp协议 基于net模块来实现

const net = require('net')
const fs = require('fs')
// 创建一个服务器
// 1. 监听地址和端口
// 2. 处理发送到当前监听地址以及端口的数据
// 3. 返回(发送)数据到连接的客户端

const server = net.createServer(() => {
  // 这个事件其实就是connection事件绑定函数
})

// 有客户端连接的时候触发
server.on('connection', (socket) => {
  // 当前连接的socket对象
  console.log('有人连接了')

  let datas = fs.readFileSync('./server/timg.jpg')
  socket.write(datas)
  socket.end()
  // socket.write('hello')
  socket.on('data', data => {
    // socket.write('show me your money')
    // if(data === 'getBaby') {
    //   // 发送图片给客户端
    // }
  })
})
// 监听地址及端口
// server.listen(12345, '0.0.0.0', ) // 通配
server.listen(12345, '127.0.0.1', )