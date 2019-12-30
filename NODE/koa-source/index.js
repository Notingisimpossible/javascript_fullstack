// let http = require('http')

// let server = http.createServer((req, res) => {
//   let path = req.url
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('服务跑起来了')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world!!!'
// })

// app.listen(3000)


let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx, next) => {
  ctx.body = {
    name: 'wn',
    age: 19
  }
  console.log(ctx.body)
  next()
})
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.listen(3000)

