import {get} from 'axios'

function getList() {
  return get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
}

export default getList