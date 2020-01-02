export default class 
BaseClass{
  constructor() {

  }
  async locationSearch(keyword) {
    return ({
      city: '南昌',
      area: [
        '东华理工大学',
        '东莞',
        '东营'
      ]
    })
  }
  async fetch (url = '', data = {}, type = 'GET', resType = 'JSON') {

  }
}