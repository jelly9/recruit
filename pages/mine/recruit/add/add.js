// pages/mine/recruit/add/add.js
const constant = require("../../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindAdd: function (e) {
    console.log("event: ", e)
    let app = getApp()
    wx.request({
      url: constant.url.addCompany,
      method: "POST",
      data: {
        "uid": app.globalData.userDetails.uid,
        "title": e.detail.value.title,
        "abstract": e.detail.value.abstract,
        "weal": e.detail.value.weal,
        "address": e.detail.value.address
      },
      success(res) {
        console.log("success: ", res)
        app.globalData.userDetails.utype = 4
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      },
      fail(res) {
        console.log("fail: ", res)
      },
    })
    wx.navigateBack({
      delta: 2,
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