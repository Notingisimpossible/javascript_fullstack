get / http1.1  
refer:  
user-agent
etag:
cache-control


http响应
Content-Length: 7877长度
空行
body <html>
  标题信息 都是http body
<html>

- DNS预加载
- 如何少加载文件
  1. 合理利用缓存
- main.js的加载来 看待这个问题
  1. 首次加载 http请求 server正常返回
    1. 返回响应头加上强缓存说明(针对时间)
    2. expires: web 11 May 2020 16:04:08(过期时间)
    3. Cache-Control: max-age=315360000(http1.1 时间精准 优先级高)
    4. 两个header都是浏览器告诉后端，这个文件，多少时间不过期
    5. 浏览器接收到上面两个header，就会文件存起来
  2. 一个小时内再请求这个文件
    1. 浏览器识别到 强制缓存 请求不发出 直接使用本地缓存 状态码是200 from cache
  3. 2个小时候，再次请求这个文件，强缓存失败， 使用协商缓存
    1. 浏览器不会直接发出请求，而是问一下后端，header带上请求头
      1. if-modfile-since: 日期   后端小老弟，这个文件。在这个日子之后有没有修改过
      2. 后端告诉你 没改过 请用缓存 响应码 304 not modfile
      3. 浏览器直接用缓存
      4. 优先级更高的， 是etag 文件指纹  内容不变  指纹不变
  4. 后端告诉你改过了 只能重新加载
- 文件缓存虽然js控制不住 浏览器控制的 但是我们可以通过工程化 来更高效的利用缓存
- 如何高效利用缓存
- 如何上线前端代码
  1. 缓存时间过长
    1. 发布上线 用户还在用缓存 会有bug
  2. 缓存时间过短
    1. 重复加载文件太多，浪费带宽

- 模板
- 静态文件(css js img video audio)
1. 模板或者html不能有缓存
  1. 这是入口 我们一旦有新代码发布上线 没法加载
2. 文件加哈希(很好的ideal)
  1. 上线之后 要求用户强制刷新这种问题 用文件名加哈希(指纹)的方式解决了
  2. a.hash.js  hash是整个a.js文件的md5值， 文件内容不变，hash不变， 缓存生效。文件内容变，缓存变，文件名都变了   --- a.hash.js => a.ghui.js 肯定重新加载。所有的静态资源文件，缓存时间可以设置很长
3. 加时间戳 <script src="/a.js?_t=xxx"><script>
4. 加版本号 <script src="/a.js?_v=1.5"><script>
5. 加指纹 但不产生新文件 <script src="/a.js?_h=abcd123a"><script>
6. webpack build  
