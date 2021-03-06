// pages/shop/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    nameList:[],
    load: true
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  typeManager(){
    wx.showToast({
      title: '分类管理',
      icon: 'none',
      duration: 1500
    })
  },
  delete(){
    wx.showToast({
      title: '删除',
      icon: 'none',
      duration: 1500
    })
  },
  make(){
    wx.showToast({
      title: '编辑',
      icon: 'none',
      duration: 1500
    })
  },
  copy(){
    wx.showToast({
      title: '复制成功',
      icon: 'none',
      duration: 1500
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nameList = ['全部','未分类'];
    this.setData({
      nameList:nameList,
     });
    console.log(nameList)
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    for (let i = 0; i < nameList.length; i++) {
      list[i] = {};
      list[i].name = nameList[i];
      list[i].id = i;
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})