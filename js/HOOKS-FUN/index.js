// 回调函数
// 异步请求

let getInfo = function (keywords, callback) { // 它就叫高阶函数
  $.ajax({
    url: 'http://musicapi.leanapp.cn/search',
    data: {
      keywords
    },
    success: function(res) {
      console.log(res)
      callback && callback(res.result.songs)
    }
  })
}
$('#btn').on('click', function() {
  let keywords = $('#input-search').val()
  getInfo(keywords, getData)
})

function getData(data) {
  if (data && data.length) {
    let html = render(data)
    // 初始化页面结构
    initDom(html, function(wrap) {
      play(wrap)
    })
  }
}

let initDom = function (tmp, callback) {
  $('.item').remove()
  $('#box').append(tmp)
  callback && callback(box)
}


let render = function (data) {
  let template = '';
  let set = new Set(data); // 去重
  data = [...set]
  for (let i = 0; i < 8; i++) {
    let item = data[i]
    let name = item.name
    let singer = item.artists[0].name
    let pic = item.album.picUrl
    let time = item.album.publishTime

    template += `
      <div class="item">
        <div class="pic" data-time="${time}">
          <span></span>
          <img src="${pic}" alt="">
        </div>
        <h4>${name}</h4>
        <p>${singer}</p>
        <audio src="https://music.163.com/song/media/outer/url?id=${item.id}"></audio>
      </div>`
  }
  return template;
}

let play = function(wrap) {
  wrap = $(wrap)
  wrap.on('click', '.item', function() {
    let self = $(this),
        $audio = self.find('audio'),
        $allAudio = wrap.find('audio');
    for (let i = 0; i < $allAudio.length; i++) {
      $allAudio[i].pause()
    }
    $audio[0].play()
    self.addClass('play').siblings('.item').removeClass('play')
  })
}