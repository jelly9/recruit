//index.js
const constant = require('../../utils/const.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    postList: null
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
  }
})