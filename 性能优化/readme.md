# 前端性能优化
  - 前端性能优化
    - 文件获取优化
      1. 加载文件 css js  
      2. http 协议的细节  
      3. 从输入url到页面渲染完成，发生了什么  
      4. 大厂怎么上线前端代码(文件加hash)  
    - 代码执行优化
      1. 节流 防抖    
      2. 重绘 回流  
      3. vue react (ssr) 常见的优化 代码执行的更少 dom操作更少 加快受屏渲染
      4. 浏览器如何渲染页面  
      5. vue源码做过哪些层面的优化


  - 从输入url到渲染页面，发生了什么？
    1. 用户输入baidu.com
    2. 浏览器通过dns，把url解析为IP
    3. 与ip地址建立tcp连接  发送http请求
    4. 服务器接收请求，查库，读文件，拼接好返回的HTTP响应
    5. 浏览器收到首屏html,开始渲染
    6. 解析html为DOM,css为CSSOM
    7. 将dom+cssom合成渲染树(render-tree) 绘图
    8. 加载script的js文件
    10. 执行js
  - 所谓的性能优化就是上面步骤加在一起，时间尽可能短，所以基本就两大方向：
    1. 少加载文件
    2. 少执行代码

  ## 浏览器缓存机制
    - 分为4个
      1. Http Cache
      2. Service Worker cache
        * 独立于主线程之外的js线程 脱离浏览器窗体 可可以实现离线缓存等功能
      3. Memory Cache
        * 内存缓存 短命 比如我们把数据存在js里 浏览器也有自己的策略  base64图片  体积小的静态资源
      4. Push Cache
       * http2的缓存

  ## 文件打包
    - 分析文件大小 比如：删除冗余的代码的tree-shaking,和去除无效的代码，[webpack系列]

  ## 图片优化
    - 图片是非常占流量的， pc端平均加载图片大小600k,简直比js包还大，所以针对图片优化，收益巨大
      1. jpg
        1. 有损压缩
        2. 不支持透明
        3. 用于背景图，轮播图
      2. png
        1. 无损压缩 质量高  支持透明
        2. 色彩线条更丰富 通常用于一些小图 比如logo 商品icon
      3. svg
        1. 文本体积小 矢量图
        2. 渲染成本高  学习成本高
      4. 图片打包雪碧图 减少http请求次数
      5. gzip(线上一定要打开) accept-encoding: gzip 开启gzip
  ## 本地存储
    - cookie localStorage sessionStorage indexDB
      1. cookie
        1. 最早 体积固定 性能浪费-- 一般来说所有请求都带上所有当前的域名cookie
      2. web Storage
        1. localSorage(持久化存储) 与 sessionStorage(会话级存储)
        2. 存储量大 不自动发给服务器 js控制
      3. indexDB
        1. 运行在浏览器上的一个非关系型的数据库
      4. PWA
        1. 基于缓存技术的应用模型

  ## 服务端渲染ssr
    - ssr.js

  ## 雅虎军规
    - (雅虎军规)[https://www.jianshu.com/p/4cbcd202a591]

  ## 性能监控
    [https://developer.mozilla.org/zh-CN/docs/Web/API/Permissions_API]
  
  ## 节流 防抖
    - 节流是每隔一定时间执行一次 防抖是只执行一次
