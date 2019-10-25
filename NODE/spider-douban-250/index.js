const https = require('https');
const cheerio = require('cheerio');//解析html

doubnaSpider('https://movie.douban.com/top250',(data) => {
  // 得到结果
  console.log(data);
})
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
    $('li .item').each(function(item){
      // 拿到每一个电影
      const picUrl = $('.pic img',this).attr('src');
      const title = $('.info .title',this).text();
      const star = $('.star .rating_num',this).text();
      const inq = $('.inq',this).text();
      // console.log({
      //   picUrl,
      //   title,
      //   star,
      //   inq
      // })
      cb({
        picUrl,
        title,
        star,
        inq
      })
    })
  })
})
}