//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isCard: [1,2,3]
  },
  isCard() {
    this.setData({
      isCard: [1,2,3]
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
  }
})
