//index.js
//获取应用实例
Page({
  data: {
  Src:'/pages/jingdiangxiaangqing/jingdianxiangqing',

  markersBeiyou:[{
    iconPath:"../images/学校.png",
    id:0,
    longitude:"116.289887" ,latitude:"40.157615",
    width:40,height:40,
    label:{
      content:"北邮沙河校区",
      color:"#dda0dd",
      borderRadius:3,
      borderWidth:1,
      borderColor:"#ffd700",
      bgColor:"#fffff0",
      padding:0,
      textAlign:"center"

    },
    markersYihe:[{
      iconPath:"../images/学校.png",
      id:0,
      longitude:"116.161481" ,latitude:"39.592288",
      width:40,height:40,
      label:{
        content:"颐和园",
        color:"#dda0dd",
        borderRadius:3,
        borderWidth:1,
        borderColor:"#ffd700",
        bgColor:"#fffff0",
        padding:0,
        textAlign:"center"
  
      }
    }]
  }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  gotoList:function(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },

})