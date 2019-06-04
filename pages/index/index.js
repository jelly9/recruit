//index.js
const constant = require('../../utils/const.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    postList: null,
    // 输入框内容
    keyword: '',
    inputShowed: false

  },
  onShow: function() {
    var that = this
    wx.request({
      url: constant.url.allPostList,
      success(res) {
        console.log("index success: ", res)
        that.setData({
          postList: res.data.c
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
})