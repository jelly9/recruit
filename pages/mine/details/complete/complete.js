// pages/mineSub/details/complete/complete.js

const constant = require("../../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: "",
    email: ""
  },

  bindSubmit: function(e) {
    let val = e.detail.value
    this.setData({
      mobile: val.mobile,
      email: val.email
    })
    // 设置全局数据
    let app = getApp()
    app.globalData.userDetails.nickname = app.globalData.userInfo.nickName
    app.globalData.userDetails.mobile = val.mobile
    app.globalData.userDetails.email = val.email
    app.globalData.userDetails.utype = 1
    app.globalData.hasCompleted = true

    // 2. 写数据库
    wx.request({
      url: constant.url.bindUserInfo,
      method: "POST",
      data: {
        "wxid": app.globalData.userDetails.wxid,
        "nickname": app.globalData.userDetails.nickname, 
        "utype": app.globalData.userDetails.utype, 
        "mobile": app.globalData.userDetails.mobile, 
        "email": app.globalData.userDetails.email
      },
      success(res) {
        console.log("success:", res)
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })    
      },
      fail(res) {
        console.log("fail:", res)
      }
    })

    // 3. 跳转到个人中心
    wx.navigateBack({
      delta: 1
    })
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