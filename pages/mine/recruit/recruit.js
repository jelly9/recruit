// pages/mineSub/recruit/recruit.js
const constant = require("../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyInfo: null,
    hasComplete: false
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
    let app = getApp()
    let that = this
    wx.request({
      url: constant.url.getPostList,
      method: "GET",
      data: {
        "uid": app.globalData.userDetails.uid
      },
      success(res) {
        console.log("success getPostList: ", res)
        that.setData({
          postList: res.data.c
        })
      },
      fail(res) {
        console.log("fail: ", res)
      }
    })

    wx.request({
      url: constant.url.getCompanyInfo,
      method: "GET",
      data: {
        "uid": app.globalData.userDetails.uid
      },
      success(res) {
        console.log("success getCompanyInfo: ", res)
        that.setData({
          companyInfo: res.data.c
        })
      },
      fail(res) {
        console.log("fail: ", res)
      }
    })
    if (app.globalData.userDetails.utype == 4) {
      that.setData({
        hasComplete: true
      })
    }
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