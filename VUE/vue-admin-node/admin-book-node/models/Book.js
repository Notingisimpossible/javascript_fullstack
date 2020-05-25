// 从文件当中去创建一个对象
const {MIME_TYPE_EPUB, UPLOAD_PATH, UPLOAD_RUL} = require('../utils/constant')
const fs = require('fs')
const Epub = require('../utils/epub')
class Book {
  constructor(file, data) {
    if(file) {
      this.createBookFromFile(file)
    }else{
      this.createBookFromData(data)
    }
  }

  createBookFromFile(file){
    const {
      destination,
      filename,
      mimetype = MIME_TYPE_EPUB,
      path,
      originalname
    } = file
    // 电子书后缀名
    const suffix = mimetype === MIME_TYPE_EPUB ? '.epub':''
    // 电子书原有路径
    const oldBookPath = path
    // 电子书新路径
    const bookPath = `${destination}/${filename}${suffix}`
    // 电子书下载url
    const url = `${destination}/${filename}${suffix}` // 因为没做nginx代理，暂时拿不到在线地址
    // 电子书解压后文件夹路径
    const unzipPath = `${UPLOAD_PATH}/unzip/${filename}`
    // 电子书解压后文件url
    const unzipUrl = `${UPLOAD_RUL}/unzip/${filename}`
    if(!fs.existsSync(unzipPath)){
      fs.mkdirSync(unzipPath, { recursive: true })
    }
    if(fs.existsSync(oldBookPath) && !fs.existsSync(bookPath)) {
      fs.renameSync(oldBookPath, bookPath)
    }

    this.filename = filename // 文件名
    this.path = `/book/${filename}${suffix}` // epub文件相对路径
    this.filePath = this.path
    this.unzipPath = `/unzip/${filename}`
    this.url = url // 下载链接
    this.title = '' // 电子书名
    this.publisher = ''//出版社
    this.author = ''
    this.contents = [] // 目录
    this.cover = ''//封面图片
    this.category = -1
    this.categoryText = '' //分类名称
    this.language = ''
    this.unzipUrl = unzipUrl
    this.originalname = originalname // 文件原名
  }

  createBookFromData(data){

  }
  parse() {
    return new Promise((resolve, reject) => {
      const bookPath = `${UPLOAD_PATH}${this.filePath}`
      if(!fs.existsSync(bookPath)){
        reject(new Error('电子书不存在'))
      }
      const epub = new Epub(bookPath)
      epub.on('error', err => {
        reject(err)
      })
      epub.on('end', err => {
        if(err) {
          reject(err)
        }else{
          console.log(epub.metadata)
          const {
            title,
            creator,
            language,
            creatorFileAs,
            cover,
            publisher
          } = epub.metadata
          if(!title){
            reject(new Error('图书标题为空'))
          }else{
            // console.log('1111')
            this.title = title
            this.language = language || 'en'
            this.author = creatorFileAs || creator || 'unknow'
            this.publisher = publisher || 'unknow'
            this.rootFile = epub.rootFile
            const handleGetImage = function(err, file, mimetype) {
              console.log(err, file, mimetype)
            }
            epub.getImage(cover, handleGetImage)
            resolve(this)
          }
        }
      })
      epub.parse()
    })
  }
}

module.exports = Book