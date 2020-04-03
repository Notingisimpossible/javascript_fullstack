const express = require('express')

const app = express()

app.get('/api/info', (req,res) => {
  res.json({
    name: '旅梦',
    age: '5',
    msg:'欢迎来到旅梦开发团'
  })
})

app.listen("3000")