var http = require('http')

http.createServer(function(req,res){
  // res.write('<head><meta charset="UTF-8"></head>')
  res.write("服务器搭建成功")
  res.end()
}).listen(3000)