import v1 from './v1'

export default app => {
  // 路由复杂
  app.use('/v1', v1)
}