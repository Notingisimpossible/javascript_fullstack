const dgram = require('dgram')

const clientSocket = dgram.createSocket('udp4') // 套接字 ipv4 ipv6

// 发送数据 UDP--无连接协议，不需要连接服务器然后再发数据
setInterval(() => {
  clientSocket.send('hello world', 12345, '127.0.0.1', ()=>{
    console.log('发送成功')
  })
},1000)