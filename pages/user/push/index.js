// pages/user/push/index.js
const app = getApp()
let {request} = require('../../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag: '1',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad({q}) {
    if(q) {
      // 根据传递的用户id拿值
    }
    let obj = {title: '魔界的她', desc: '我来自人界', content: '在魔界中遇到了我生命中的那个女人', date: '2018-12-12'},
        list = []
    for(let i = 12; i > 0; i --) {
      obj.id = i
      list.push(obj)
    }
    this.setData({list})
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
  navChangeEvent({target}) {
    let {tag} = target.dataset
    if(tag) this.setData({tag})
  },
  publishEvent({target}) {
    let {id} = target.dataset
    wx.showModel({
      title: '提示',
      content: '确定发布选中条目？',
      success({confirm}) {
        if(confirm) {
          // TODO: 进行发布操作
        }
      }
    })
  },
  cancelEvent({target}) {
    let {id} = target.dataset
    wx.showModel({
      title: '提示',
      content: '确定撤下选中条目？',
      success({confirm}) {
        if(confirm) {
          // TODO: 进行撤下操作
        }
      }
    })
  }
})