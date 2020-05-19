const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })) //解析参数
app.use(bodyParser.json())//解析json格式
app.use('/', router)

const privateKey = fs.readFileSync('./https/privatekey.pem', 'utf8')
const certification = fs.readFileSync('./https/certification.pem', 'utf8')
const certrequest = {key: privateKey, cert: certification}

const httpsServer = https.createServer(certrequest, app)
const SSLPORT = 18082

// app.get('/', router)
const serevr = app.listen(5000, () => {
  const {address, port} = serevr.address()
  console.log('Http Server is Runing on http://%s:%s', address, port)
})

// 创建https服务
httpsServer.listen(SSLPORT, function() {
  console.log('Https Server is runing on https://localhost:%s', SSLPORT)
})
