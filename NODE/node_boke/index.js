const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')//解析表单中间件
const ejs = require('ejs')
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config/default.js');
const Router=require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')//静态资源

const app = new Koa()
const router = new Router()

router.get('*', (ctx, next) => {
  ctx.body = 'hello word'
})


app.use(router.routes())
// 缓存
app.use(staticCache(path.join(__dirname, './public'), 
{ dynamic: true}, 
{ maxAge: 365*24*60*60 }
))
app.use(staticCache(path.join(__dirname, './images'), 
{ dynamic: true}, 
{ maxAge: 365*24*60*60 }
))


// 配置服务器端模板渲染引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.listen(3000)// 监听端口号
console.log(`listening on port ${config.port}`)
