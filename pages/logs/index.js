// tabbar/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let obj = {
      name: '刘贵',
      img: '/static/assets/images/avatar.png',
      title: '我发布的一篇文章',
      desc: '无论好坏，都将成为历史',
      date: '2018-12-12'
    }
    let arr = []
    for(let i = 20; i > 0; i --) {
      obj.id = i
      arr.push(obj)
    }
    this.setData({
      list: arr
    })
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

  }
})