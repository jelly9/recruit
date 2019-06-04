// pages/index/deliver/deliver.js
const constant = require("../../../utils/const.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumeList: null,
    company_id: 0,
    detail_id: "",
    uid: 0
  },

  bindDeliver: function (e) {
    console.log("bindDeliver data: ", this.data)
    this.setData({
      resume_id: e.currentTarget.dataset.resume_id
    })

    wx.request({
      url: constant.url.deliverResume,
      method: "POST",
      data: {
        "uid": this.data.uid,
        "company_id": this.data.company_id,
        "detail_id": this.data.detail_id,
        "resume_id": this.data.resume_id
      },
      success(res) {
        console.log("deliver success: ", res)
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 2000,
          mask: true
        })  
      },
      fali (res) {
        console.log("deliver fali: ", res)
      }
    })

    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("deliver: ", options)
    let app = getApp()
    this.setData({
      company_id: parseInt(options.company_id),
      detail_id: options.detail_id,
      uid: app.globalData.userDetails.uid
    })
    let that = this
    wx.request({
      url: constant.url.getResumeList,
      method: "GET",
      data: {
        "uid": this.data.uid
      },
      success(res) {
        console.log("onLoad success: ", res)
        that.setData({
          resumeList: res.data.c
        })
      },
      fail(res) {
        console.log("onLoad fali: ", res)
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