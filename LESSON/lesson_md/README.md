## hash
* url 不好看  
* 好处 兼容性

## history
* baidu.com -> baidu.com/s/
* 好处： url 好看  
* 坏处： 
  js pushState() 不会引起页面刷新  
  但是在/url4上面点击刷新，是会把/url4发送到后端请求资源的 后端没处理 404

* window.add(popstate): 检测到 浏览器 前进 后退  
  back go forward 这几个行为带来的url的变化  
  pushState
  replacecState: ?