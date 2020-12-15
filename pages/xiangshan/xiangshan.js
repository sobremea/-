Page({
  data: {
  Src:'/pages/xiangshan/xiangshan'
  },
  //事件处理函数
  
  onLoad: function () {
   
  },
  gotoXiangqing:function(){
    wx.navigateTo({
      url: '/pages/xiangshan/xiangqing/xiangqing',
    })
  },
  gotoGonglue:function(){
    wx.navigateTo({
      url: '/pages/xiangshan/gonglue/gonglue',
    })
  },
  gotoMeishi:function(){
    wx.navigateTo({
      url: '/pages/xiangshan/meishi/meishi',
    })
  },
})
