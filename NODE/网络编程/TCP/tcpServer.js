var net = require('net')

var server = net.createServer(function(socket){
  socket.on('data',function(data){
    socket.write(`你好${data}`)
  })
  socket.on('end', function(){
    console.log('断开连接')
  })
  socket.write("欢迎来到TCP事例")
})

server.listen(8142,function(){
  console.log('server is runing localhost:8142')
})