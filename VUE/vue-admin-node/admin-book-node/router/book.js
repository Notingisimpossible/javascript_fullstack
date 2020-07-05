const express = require('express')
const multer = require('multer')
const Result = require('../models/Result')
const Book = require('../models/Book')
const { UPLOAD_PATH } = require('../utils/constant')
const router = express.Router()
const boom = require('boom')

router.post(
  '/upload',
  multer({ dest: `${UPLOAD_PATH}/book` }).single('file'),
  function(req, res, next) {
    if (!req.file || req.file.length === 0) {
      new Result('上传电子书失败').fail(res)
    } else {
      const book = new Book(req.file)
      // console.log(req.file)
      book.parse().then(book => {
        // console.log(book)
        new Result(book, '上传电子书成功').success(res)
      }).catch(err => {
        next(boom.badImplementation(err))
      })
      // console.log(book)
    }
  }
)

router.post('/addBook', function(req, res, next){
  
})

module.exports = router