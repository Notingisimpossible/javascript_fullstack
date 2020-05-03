var net = require('net')

var client = net.connect({port: 8142}, function(){
  console.log("client connected")
  client.write('world\r\n')
})
client.on('data', function(data) {
  console.log(data.toString())
  client.end()
})
client.on('end', function(){
  console.log('client disconnect')
})
client.on('connect',function(){
  console.log("连接成功")
})