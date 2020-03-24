// 服务端
// 监听当前服务器上指定的ip与端口， 如果有数据报发送到给ip端口上，就进行处理

const dgram = require('dgram')
// 创建一个socket类，用来处理网络数据的一个标准API对象
// 通过socket，我们就可以对网络数据进行读取和输出

// const server = new dgram.Socket()
const server = dgram.createSocket('udp4') // 套接字 ipv4 ipv6

server.on('listening', () => {
  console.log('服务器开启成功，等待数据:')
})
// 当接收到数据时候
server.on('message', (msg) => {
  console.log('接收到数据是:'+ msg)
})
// 监听指定的地址和端口
server.bind(12345, '127.0.0.1')