Page({
  data: {
  Src:'/pages/yihe/yihe'
  },
  //事件处理函数
  
  onLoad: function () {
   
  },
  gotoXiangqing:function(){
    wx.navigateTo({
      url: '/pages/yihe/xiangqing/xiangqing',
    })
  },
  gotoGonglue:function(){
    wx.navigateTo({
      url: '/pages/yihe/gonglue/gonglue',
    })
  },
  gotoMeishi:function(){
    wx.navigateTo({
      url: '/pages/yihe/meishi/meishi',
    })
  },
})
