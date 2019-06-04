//app.js
const constant = require('./utils/const.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 1.更新全局app
    wx.login({
      success(res) {
        if (res.code) {
          var tmp = res
          // 获取openid
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx0c1e2163277b5aab&secret=10bcf0966aec8e9c152866a383ad441a&js_code=' + res.code + '&grant_type=authorization_code',
            success(res) {
              let app = getApp()
              app.globalData.userDetails.wxid = res.data.openid

              // 查看是否已经绑定用户信息
              wx.request({
                url: constant.url.getUserInfo,
                method: "GET",
                data: {
                  "wxid": app.globalData.userDetails.wxid
                },
                success(res) {
                  console.log("get user info success:", res)
                  if (res.data.c == null) {
                    app.globalData.hasCompleted = false
                  } else {
                    app.globalData.userDetails.uid = res.data.c.uid
                    app.globalData.userDetails.utype = res.data.c.utype
                    app.globalData.userDetails.nickname = res.data.c.nickname
                    app.globalData.userDetails.mobile = res.data.c.mobile
                    app.globalData.userDetails.email = res.data.c.email
                    app.globalData.hasCompleted = true
                  }
                },
                fali(res) {
                  console.log("get user info fail:", res)
                }
              })
            },
            fail(res) {
              console.log("fail")
              console.log(res)
            }
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail(res) {
        console.log("fail")
        console.log(res)
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userDetails: {},
    hasCompleted: false
  }
})