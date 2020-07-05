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
      3. vue react (ssr) 常见的优化 代码执行的更少 dom操作更少 加快首屏渲染
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

  ## DOM操作实在是太慢了
    - 回流：当我们对dom的修改引发Dom的几何信息发生变化(比如修改元素的宽高，或者隐藏元素等)时，浏览器需要重新计算元素的几何属性(其他元素的几何信息也可能因此受到影响),再将计算结果绘制出来，这个过程叫回流(也叫重排)
    - 重绘：当我们对dom的修改导致了样式变化，却没有影响其几何属性(比如修改了颜色或背景图片)时，浏览器不需要重新计算元素的几何属性，直接为该元素绘制新的样式(跳过了上述回流环节)，这个过程叫重绘。
    - 重绘不一定导致回流，回流一定导致重绘

    - 回流时影响最大的
      1. 窗体 字体大小变化
      2. 增加样式表
      3. 内容变化
      4. class属性变化
      5. offset 和 offsetHeight
      6. fixed

  ## lazy-load 懒加载

  ## Vue
    - v-if 和 v-show
      1. 初始化性能 vs 频繁切换性能
    - 和渲染无关的数据，不要放在data上，data也不要嵌套太多层
    - nextTick
      1. 修改数据的方向，试图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后再同一进行视图更新
      this.$nextTick(() => {
        <!-- dom更新了 -->
      })
    - Object.freeze()
      冻结数据 取消setters
  ## react
    - 只传递需要的props
      不要随便<Component {...props} />
    - key 和 无状态组件
    - pureComponent(渲染时机) shouldComponentUpdate
    - 少在render中绑定事件
    - 长列表优化  --- react virtualized

  ## 浏览器渲染
    1. 浏览器执行所有的加载解析逻辑，解析html的过程中发出了页面渲染所需的各种外部资源
    2. 浏览器识别所有的css样式信息与Dom树合并，生产render树
    3. 页面中的所有元素的几何信息都在这一步计算出来
    4. 这一步中浏览器会根据我们的DOM代码结果，把每一个页面图层转化为像素，对所有媒体文件进行解码
    5. 最后浏览器会合并各个图层，将数据由cpu 输出给GPU最终绘制在屏幕上

  ## css

  ## 算法
    1. 排序
    2. 动态规划
  ## vue的dom diff 做了哪些优化
    1. vue中 使用definePropery实际上是能够知道所有的数据的修改，知道哪个数据修改了，然后去修改dom(Vue1.0)
    2. 虚拟dom是什么，数据修改后，我们通过dom diff算出哪个数据改了，然后再去修改dom
    3. 有definPeropery 为啥还要虚拟 dom

    - vue1的问题？每个数据都有监听器，watcher太多了，项目庞大之后问题尤其明显，vue2做了一个折中，watcher只到组件层面，一个组件只有一个watcher,组件内部使用dom diff