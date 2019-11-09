# 跨域
浏览器的安全策略：
两个服务需要通信需要遵守同源策略：同协议 同域名 同端口号
同源才会让你发出请求
不同源 产生跨域
http://localhost:8080/index.html

 http://localhost.com/api/v1

 baidu.com     api.baidu.com

# cors
cross-origin-resource-share
一个规范 允许服务器申明哪些源可以访问 
## 请求的步骤
1. 简单请求： 直接发起跨域请求
2. 非简单请求：先发起预检请求(preFlight),预先测试一下服务端是否支持跨域，之后才会发起正式跨域请求

简单请求-表单可以构造的请求

## jsonp
link script img: 不受同源策略的影响