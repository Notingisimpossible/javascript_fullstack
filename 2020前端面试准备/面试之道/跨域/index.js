// 什么是跨域？为什么浏览器要使用同源策略？你有几种解决跨域的方式？了解预检请求？

// 协议、域名、端口有一个不同就会产生跨域
// 同源策略主要用来防止CSRF攻击 


// 跨域并不能完全阻止CSRF攻击
// 1. from表单可以跨域
// 2. JSONP, 利用<script></script>标签没有跨域限制的漏洞(只能用于get请求)
// 3. CORS, 后端允许跨域，服务端这设置Access-Control-Allow-Origin 就可以开启CORS
// 4. nginx代理



{/* <script>
  function jsonp(data) {
    console.log(data)
  }
</script> */}