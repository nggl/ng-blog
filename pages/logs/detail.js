// pages/logs/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let obj = {
        tt: '来自火星的你',
        desc: '这是一本很出色的书籍',
        date: '2018-12-12',
        reader: 122,
      },
      arr = []
    for(let i = 10; i > 0; i --) {
      obj.id = i
      arr.push(obj)
    }
    let info = {
      name: '章三',
      img: 'https://source.ngfrankgl.cn/imgs/1.jpg',
      sex: 1, // 1 - male; 2 - female
      prod: arr,
    }
    this.setData({
      info,
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