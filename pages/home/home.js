// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    avatar: null,
    list: [{
      "text": "课程",
      "iconPath": "../../static/img/A1.PNG",
      "selectedIconPath": "../../static/img/A2.PNG",
      badge: 'New'
    },
    {
      "text": "学生中心",
      "iconPath": "../../static/img/B1.PNG",
      "selectedIconPath": "../../static/img/B2.PNG",
      badge: 'New'
    }],
    toView: 'LOL',
    images: ['../../static/img/qiuqiu.jpg', '../../static/img/qiuqiu.jpg', '../../static/img/qiuqiu.jpg']
  },

  scroll: function (e) {
    console.log(e);
    this.setData({
      toView: 'LOL: ' + e.timeStamp.toString()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: options.avatar,
      username: options.username
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  tabChange(e) {
    console.log('tab change', e)
  },
  
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  }
})