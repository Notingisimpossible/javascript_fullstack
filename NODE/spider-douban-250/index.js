const https = require('https');
const http = require('http');
const cheerio = require('cheerio');//解析html

// doubnaSpider('https://movie.douban.com/top250',(data) => {
//   // 得到结果
//   console.log(data);
// })
function doubnaSpider(url,cb){
https
.get(url,
(res)=>{
  let html = '';
  //流的形式,每次返回一小段
  res.on('data',(chunk) =>{
    html += chunk;
  })
  res.on('end',() => {
    console.log(html);
    // jquery
    const $ = cheerio.load(html);
    let movies = [];
    $('li .item').each(function(item){
      // 拿到每一个电影
      const picUrl = $('.pic img',this).attr('src');
      const title = $('.info .title',this).text();
      const star = $('.star .rating_num',this).text();
      const inq = $('.inq',this).text();
      movies.push({
        picUrl,
        title,
        star,
        inq
      })
      // console.log({
      //   picUrl,
      //   title,
      //   star,
      //   inq
      // })
      // cb({
      //   picUrl,
      //   title,
      //   star,
      //   inq
      // })
    })
    cb(movies);
  })
})
}

http.createServer((req, res) => {
  doubnaSpider('https://movie.douban.com/top250',(data) => {
    // text/plain 纯文本
    // text/html html
    // mime 类型
    console.log('data',data);
    res.writeHead(200,{
      'Content-type':'application/json',
      'Access-Control-Allow-origin':'*'
    })
    res.end(JSON.stringify(data))//转成字符串
  })
}).listen(8080,() => {
  console.log('sever is runing 8080');
})