//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/detail/index?id=0'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo({detail}) {
    console.log(detail)
    if(detail.errMsg === 'getUserInfo:fial auth deny') {
      app.globalData.userInfo = null
      this.setData({
        userInfo: null,
        hasUserInfo: true
      })
    } else {
      app.globalData.userInfo = detail.userInfo
      this.setData({
        userInfo: detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  jumpEvent({target}) {
    let {tag} = target.dataset
    if(app.globalData.userInfo) {
      let url = `/pages/user/${tag}/index?q=${'openid'}`
      wx.navigateTo({url})
    } else {
      wx.showToast({
        title: '请先点击`登录`',
        icon: 'none',
        duration: 1000,
      })
    }
  }
})
