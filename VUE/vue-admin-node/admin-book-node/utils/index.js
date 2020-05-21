const CryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./constant')

function getAesString(data,key,iv){//加密
  var key  = CryptoJS.enc.Utf8.parse(key);
  var iv   = CryptoJS.enc.Utf8.parse(iv);
  var encrypted =CryptoJS.AES.encrypt(data,key,
      {
          iv:iv,
          mode:CryptoJS.mode.CBC,
          padding:CryptoJS.pad.Pkcs7
      });
  return encrypted.toString();    //返回的是base64格式的密文
}

// verify解析token
function decoded(req) {
  let token = req.get('Authorization') // 从请求头里面拿token
  if(token.indexOf('Bearer') === 0) {
    token = token.replace('Bearer','')
  }
  return jwt.verify(token, PRIVATE_KEY)
}

module.exports = {
  getAesString,
  decoded
}