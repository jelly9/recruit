// pages/mine/mine.js//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 页面跳转-个人详情
  bindDetails: function () {
    wx.navigateTo({
      url: '../mine/details/details'
    })
  },

  // 页面跳转-简历
  bindResume: function () {
    wx.navigateTo({
      url: '../mine/resume/resume'
    })
  },

  // 页面跳转-投递历史
  bindHistory: function () {
    wx.navigateTo({
      url: '../mine/history/history'
    })
  },
  
  // 页面跳转-个人收藏
  bindCollection: function () {
    wx.navigateTo({
      url: '../mine/collection/collection'
    })
  },

  // 页面跳转-我要招聘
  bindRecruit: function () {
    wx.navigateTo({
      url: '../mine/recruit/recruit'
    })
  },

  // 页面跳转-设置
  bindSetup: function () {
    wx.navigateTo({
      url: '../mine/setup/setup'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
