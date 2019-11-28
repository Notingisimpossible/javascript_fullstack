## 应用层
http webSocket

http1.1: client ->>>> server

webSocket: client  -> server
server  ->  client

全双工双向通信

http2.0:支持 server-push

## 连接 
1 发送http请求
  后端 101 switch pro
  ConnectionL Upgrade
之后由http协议升级为 webSocket 后续的发送 接受信息都会走 这个
全双工双向通道