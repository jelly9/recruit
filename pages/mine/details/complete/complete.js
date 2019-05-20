// pages/mineSub/details/complete/complete.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxid:"",
    nickname: "",
    mobile: "",
    email: ""
  },

  bindSubmit: function(e) {
    /*
    1.写数据库
    2.更新全局app
    */
    let val = e.detail.value
    this.setData({
      mobile: val.mobile,
      email: val.email
    })

    let app = getApp()
    app.globalData.userDetails.nickname = app.globalData.userInfo.nickName
    app.globalData.userDetails.mobile = val.mobile
    app.globalData.userDetails.email = val.email
    app.globalData.hasCompleted = true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})