// pages/share/publish/index.js
const app = getApp()
let {request} = require('./../../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCanPublish: false,
    info: {
      title: '',
      desc: '',
      content: '',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad({q}) {
    if(q) {
      wx.setNavigationBarTitle({title: '修改'})
      // request(url, {q}).then(data => {
      //    this.setData({info})
      // })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  postForm({detail}) {
    wx.hideToast()
    let {title, desc, content} = detail.value
    if(!(title || content)) {
      wx.showToast({
        title: '发布的主题或者主要内容不为空',
        icon: 'none',
      })
    } else {
      console.log(detail)
      // request(url, detail.value, 'post').then(data => {

      // })
    }
  },
  onValueChange({formats}) {
    console.log(formats)
  }
})