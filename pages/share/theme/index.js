let app = getApp()
Page({
  data: {
    tid: '',
    isNotNext: true,
    tip: {
      count: 1,
      list: [{
        name: '张三爱上里斯',
        author: '章三',
        updateDate: '2020-12-10',
        id: 11
      }]
    }
  },
  onLoad({tid}) {
    this.setData({tid})
  },
  async onInputConfirm({detail}) {
    app.globalData.themeTitle = detail.value
    if(detail.value && detail.value.trim()) {
      // 做一次主题名称校验
      // 返回 有多少人写了相关标题的内容
      this.setData({isNotNext: false})
    } else {
      this.setData({isNotNext: true})
    }
  },
  onNextEvent() {
    wx.navigateTo({
      url: `/editor/editor?tid=${this.data.tid}`
    })
  }
})