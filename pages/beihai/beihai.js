Page({
  data: {
  Src:'/pages/beihai/beihai'
  },
  //事件处理函数
  
  onLoad: function () {
   
  },
  gotoXiangqing:function(){
    wx.navigateTo({
      url: '/pages/beihai/xiangqing/xiangqing',
    })
  },
  gotoGonglue:function(){
    wx.navigateTo({
      url: '/pages/beihai/gonglue/gonglue',
    })
  },
  gotoMeishi:function(){
    wx.navigateTo({
      url: '/pages/beihai/meishi/meishi',
    })
  },
})
