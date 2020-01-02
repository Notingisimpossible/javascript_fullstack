import BaseClass from '../../prototype/baseClass'

class Cities extends BaseClass{
  constructor() {
    super()
    this.suggestion = this.suggestion.bind(this)
  }
  async suggestion(req, res, err) {
    let { keyword } = req.query
    if (!keyword) {
      // 参数校验
      res.send({
        //xhr.status:获取当前服务器的响应状态  200=>成功
        status: -1,
        message: '参数错误'
      })
      return
    }
    try {
      // 
      let data = await this.locationSearch(keyword)
      res.send({
        //xhr.status:获取当前服务器的响应状态  200=>成功
        status: 200,
        message: '成功获取位置信息',
        data
      })
    }catch(e) {
      res.send({
        //xhr.status:获取当前服务器的响应状态  200=>成功
        status: -1,
        message: '获取位置失败'
      })
    }
  }
}

export default new Cities()