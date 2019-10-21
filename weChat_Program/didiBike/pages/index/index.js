Page({
  data: {
    longitude: 115.816623,//经度
    latitude: 28.727408,//纬度
    scale: 18
  },
  onLoad: function (options) {/*微信赋予小程序可以调用得API*/
    wx.showLoading({
      title: '获取坐标中',
    });
    //手机gps
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        let { longitude, latitude } = res;
        this.setData({
          longitude,
          latitude
        },
        ()=>{
          wx.hideLoading()
        })
      },
    });
  },
  onReady(){
    // 地图上下文环境对象
    this.mapCtx = wwx.createMapContext('map');
  },
  toUser(){},
  toMsg(){},
  toReset(){
// 使用地图来来去去 再回到起点
    this.mapCtx.moveToLocation();
      
  }
})