// pages/company/company.js
const constant = require('../../utils/const.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyInfoList: null
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
    let that = this
    wx.request({
      url: constant.url.getAllCompanyInfo,
      method: "GET",
      success(res) {
        console.log("success getCompanyInfo: ", res)
        that.setData({
          companyInfoList: res.data.c
        })
      },
      fail(res) {
        console.log("fail: ", res)
      }
    })
  },
  // 输入框发生变化时触发
  inputTyping: function (e) {
    this.setData({
      keyword: e.detail.value,
      inputShowed: true
    });
  },
  // 当有输入时触发
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // 当点击取消时触发
  hideInput: function () {
    this.setData({
      inputShowed: false,
      keyword: '',
      shopList: [],
      isDisplayCreateNew: false
    });
  },

  // 当点击清楚按钮 (X) 时触发
  clearInput: function () {
    this.setData({
      keyword: '',
      inputShowed: false
    });
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