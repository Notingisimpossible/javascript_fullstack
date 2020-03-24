const net = require('net')
const fs = require('fs')

// 创建客户端与udp不同
// net.Socket
// 1. new net.Socket()
// 2. net.createConnection()
// 你要连接的目标主机地址与端口号
const clientSocket = net.createConnection(12345, '127.0.0.1')
var base64Img = null;
var img = null;
// 可读流对象 监听数据传输
clientSocket.on('data', data => {
  // console.log('服务器返回' + data)
  console.log(data)
  // fs.writeFileSync('./server/timg.jpg', data)
  // clientSocket.write('getmoney')
  // clientSocket.write('getBaby')
  base64Img = data.toString('base64')
  console.log(base64Img)
  img = new Buffer(base64Img, 'base64')
})

clientSocket.on('end', (data) => {
  console.log('数据包传输完成')
  // 把接收到的数据组合起来
  fs.writeFileSync('./server/timg1.jpg', img, function(err){
    if(err){
      console.log(err)
    }
  })
})