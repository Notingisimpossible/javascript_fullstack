// 请问有几种方式实现存储功能？分别是什么？什么是Service Worker?

// cookie, localStorage, sessionStorage, indexdB
// https://www.jianshu.com/p/b9d2a2391785

// ServiceWorker:
// 运行在浏览器背后的 独立的线程，一般可以用来做缓存
// 使用 ServiceWorker的话，必须使用HTTPS协议，因为它当中涉及到请求拦截
// 实现缓存的三大步骤：
// 1. 先注册 ServiceWorker
// 2. 监听到 install事件之后，就可以缓存需要的文件
// 3. 用户下一次访问就可以查询是否存在缓存，存在的话就读取缓存文件