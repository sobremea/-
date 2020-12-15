Page({
  data: {
  Src:'/pages/tiantan/tiantan'
  },
  //事件处理函数
  
  onLoad: function () {
   
  },
  gotoXiangqing:function(){
    wx.navigateTo({
      url: '/pages/tiantan/xiangqing/xiangqing',
    })
  },
  gotoGonglue:function(){
    wx.navigateTo({
      url: '/pages/tiantan/gonglue/gonglue',
    })
  },
  gotoMeishi:function(){
    wx.navigateTo({
      url: '/pages/tiantan/meishi/meishi',
    })
  },
})