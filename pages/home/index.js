// tabbar/home/index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
  },
  onLoad (options) {
    let imgUrls = []
    for(let i = 6; i > 0; i --) {
      imgUrls.push({
        link: `/static/assets/images/${i}.jpg`,
        id: i,
      })
    }
    this.setData({imgUrls})
  },
  onPullDownRefresh () {

  },
  onReachBottom () {

  },
})
