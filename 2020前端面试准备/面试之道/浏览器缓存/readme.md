# 浏览器的缓存机制
<!-- 性能优化有关 -->
 - 缓存是一种简单高效的优化方式，它可以显著减少网络传输带来的损耗

## 缓存位置
1. service Worker
2. Memory Cache
3. Disk Cache
4. Push cache
5. 网络请求

- service Worker：
  1. service Worker的缓存与浏览器其他内建的缓存机制是不同的，它可以让我们自由控制 缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续的
  2. 当service Worker没有缓存命中时候，我们需要调用fetch函数(浏览器的内存卡当中)获取数据，但是不管我们是从Memory Cache中还是从网络请求中获取的数据，浏览器统一会显示我们是从serice Worker中获取的

- Memory Cache:
  1. 内存缓存，读取缓存中的数据肯定比读取磁盘快，但是内存缓存持续性端短，会随着进程释放而释放。一旦我们关闭tab页面，内存缓存也就释放了

  问：既然内存缓存高效，那么可以把数据全部存在缓存中吗？
  答：不能！内存缓存空间大小是有限制的

- Disk Cache
  1. 也就是存储在硬盘中的缓存，读取速度慢一点，但是啥都能存。它比Memory Cache胜在容量和存储时效性

- Push cache：
  1. 是HTTP/2中的内容，当以上三种缓存都没有命中的时候它才会被使用。并且它的缓存事件很短暂，只会在会话(session)中存在，一旦结束会话，就被释放。

## 缓存策略 （均通过HTTP Header来实现）
  1. 强制缓存
    - 可以通过设置两种HTTP Header来实现：Expirse 和 Cache-Control
    - 强缓存表示在缓存期间不需要请求，state code 为200

    - Expires: Web, 22 May 2020 08: 24 : 00 GMT
     1. Expires是HTTP/1的产物,表示资源会在Web, 22 May 2020 08: 24 : 00 GMT后过期，需要再次请求，并且Expires受限于本地时间，如果修改本地时间可能会造成缓存失效
    - Cache-Control: max-age=30
      1. 出现于HTTP/1.1,优先级高于Expires。该属性表示资源会在30秒之后过期，需要再次请求
  2. 协商缓存
    - 如果协商缓存过期了，就要发起请求来验证资源是否更新。协商缓存可以通过设置两种HTTP Header来实现：Last-Modifed 和 Etag。
    - Last-Modifed 和 If-Modified-Since
      1. Last-Modifed表示本地文件的最后修改日期，If-Modified-Since会将Last-Modifed的值发送给服务器，询问服务器该日期后资源是否有更新，有的话将子女资源返回，否则返回304
    - Last-Modifed缺点;
      1. 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成Last-Modifed被修改,服务端无法命中缓存导致发送相同的资源
      2. 因为Last-Modifed只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务器会认为资源还是命中了，不会返回正确的资源
      
    - ETag 和 If-None-Match
      1. ETag类似于文件指纹，If-None-Match会将ETag的值发送给服务器，询问服务器该资源是否有更新，有的话将该资源返回。


    - 如果在项目中什么缓存都没用，那么浏览器会怎样？
      1. 对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的Date减去Last-Modifed值得10%作为缓存时间

## 实际应用缓存策略
  1. 频繁变动得资源：Cache-Control: no-cache(不缓存)
  2. 代码文件：一般文件名都做了hash处理，只有修改了代码才会有新的文件产生，Cache-Control: max-age=3153600