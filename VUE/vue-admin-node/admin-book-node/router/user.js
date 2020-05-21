const express = require('express')
const Result = require('../modules/result')
const {login, findUser} = require('../services/user')
const {getAesString, decoded} = require('../utils/index')
const {PWD_SALT} = require('../utils/constant')
const { body, validationResult } = require('express-validator')
const boom = require('boom')
const jwt = require('jsonwebtoken')
const {PRIVATE_KEY, JWT_EXPIRED} = require('../utils/constant')
// 注册路由
const router = express.Router()

router.post(
  '/login',
  [
    body('username').isString().withMessage('用户名必须为字符'),
    body('password').isString().withMessage('密码必须为字符'),
  ],
  function (req, res, next) {
    const err = validationResult(req)
    if(!err.isEmpty()){
      const [{msg}] = err.errors
      next(boom.badRequest(msg))
    }else{
      // console.log(req.body)
      const { username, password } = req.body
      // password = getAesString(`${password}${PWD_SALT}`)
      login(username, password).then(user => {
        if (!user || user.length === 0) {
          new Result(null, '登录失败').fail(res)
        } else {
          const _user = user
          const token = jwt.sign(
            {username},
            PRIVATE_KEY,
            {expiresIn: JWT_EXPIRED}
          )
          new Result({token}, '登录成功').success(res)
        }
      })
    }
  })
router.get('/info', async function (req, res) {
  // 拿到 token
  const decode = decoded(req)
  console.log(decode)
  console.log(decode, '-------')
  // if(decode && decode.username) {
  //   console.log(decode)
  // }
  findUser('admin').then(user => {
    console.log(user)
    if (user) {
      user.roles = [user.role]
      new Result(user, '用户信息查询成功').success(res)
    } else {
      new Result(user, '用户信息查询失败').fail(res)
    }
  }).catch(err => {
    new Result(err, '用户信息查询失败')
  })
})

module.exports = router