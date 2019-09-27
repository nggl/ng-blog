//app.js
const {request} = require('./utils/request')
App({
  onLaunch() {
    let vm = this
    // 登录
    wx.login({
      success({errMsg, code}){
        if(errMsg === 'login:ok') {
           // 发送 code 到后台换取 openId, sessionKey, unionId
           
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success({authSetting, errMsg}){
        if (authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success(res) {
              // 可以将 res 发送给后台解码出 unionId
              vm.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (vm.userInfoReadyCallback) {
                vm.userInfoReadyCallback(res)
              }
            },
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,

  }
})