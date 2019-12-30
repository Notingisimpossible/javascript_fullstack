## localStorage
  * 永久性
## sessionStorage
  * 当前这次会话

## cookie
  * domain: cookie生效的域
  * .baidu.com   
  * map.baidu.com

  * path: 路径
    - /
    - /mobile

  * domain + path: 构成cookie生效的范围

  * expires/max-age: 生效的时间  
  * httpOnly:true/false
    - cookie来源: 1.服务端  2.前端js
    - httpOnly = true cookie不可以被js操作
  * secure:
    - 只在https 环境下 传输cookie