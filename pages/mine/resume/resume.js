// pages/mineSub/resume/resume.js
const constant = require("../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumeList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    let that = this
    wx.request({
      url: constant.url.getResumeList,
      method: "GET",
      data: {
        "uid": app.globalData.userDetails.uid
      },
      success(res) {
        console.log("success: ", res)
        that.setData({
          resumeList: res.data.c
        })
      },
      fail(res) {
        console.log("fali: ", res)
      }
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

  }
})