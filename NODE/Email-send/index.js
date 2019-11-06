const http = require('http');
const fs = require('fs');
const urlModule = require('url');
const nodemailer = require('nodemailer');
let code = 2333;
// 当访问register 展示一个 注册 html
// 注册成功 展示一个 成功 html
http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const urlObj = urlModule.parse(url);
  console.log('url',url);
  if (url === '/register' && method === 'GET'){
    // req res 两个对象继承了 流Stream 和 事件 Event
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    })
    fs.createReadStream('./register.html').pipe(res);
  }
  else if(urlObj.pathname ==='/sendEmail' && method === 'GET'){
    const emailQs = urlObj.query;
    const email = emailQs.split('=')[1];
    const transport = nodemailer.createTransport({//申请权限
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '2421665649@qq.com',
        pass: 'eiqhllidkqmeebhj'
      }
    })
    transport.sendMail({
      to: email,
      html: `<h2>${code}</h2>`,
      from: '2421665649@qq.com',
      subject: '我的世界网站验证'
    },(error,info) => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      if (error){
        res.end(JSON.stringify({
          code: 500,
          email
        }))
      }
      else{
        res.end(JSON.stringify({
          code: 200,
          email
        }))
      }
    })
  }
  else if(urlObj.pathname === '/register1' && method==='POST'){
    let data;
    req.on('data', (c) => {
      data += c;
    })
    req.on('end', () => {
      console.log('data', data);
      res.end(data);
    })
  }
  else{
    res.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8',
    })
    res.end('页面找不到');
  }
})
.listen(3344, () => {
  console.log('server is running http://localhost:3344')
})