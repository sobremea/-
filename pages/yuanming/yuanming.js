Page({
  data: {
  Src:'/pages/yuanming/yuanming'
  },
  //事件处理函数
  
  onLoad: function () {
   
  },
  gotoXiangqing:function(){
    wx.navigateTo({
      url: '/pages/yuanming/xiangqing/xiangqing',
    })
  },
  gotoGonglue:function(){
    wx.navigateTo({
      url: '/pages/yuanming/gonglue/gonglue',
    })
  },
  gotoMeishi:function(){
    wx.navigateTo({
      url: '/pages/yuanming/meishi/meishi',
    })
  },
})
