// pages/mine/resume/add/add.js
const constant = require("../../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindAdd: function (e) {
    console.log("event: ", e)
    let app = getApp()
    wx.request({
      url: constant.url.addResume,
      method: "POST",
      data: {
        "uid": app.globalData.userDetails.uid,
        "name": e.detail.value.name,
        "id_no": e.detail.value.id_no,
        "email": e.detail.value.email,
        "mobile": e.detail.value.mobile,
        "school": e.detail.value.school,
        "major": e.detail.value.major,
        "post": e.detail.value.post,
        "certify_name": e.detail.value.certify_name,
        "certify_mobile": e.detail.value.certify_mobile,
        "certify_relation": e.detail.value.certify_relation
      },
      success(res) {
        console.log("success: ", res)
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