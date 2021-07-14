Page({
  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    richContent: {
      html: '',
      text: '',
      delta: '',  // 内部(editor)使用
    },
    tid: '',
    isNotPush: true,
    isAction: false,
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onLoad({tid, id}) {
    if(tid) {
      this.data.tid = tid
    }
    if(id) {
      this.data.id = id
    }
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({ isIOS})
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({ editorHeight, keyboardHeight })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    wx.createSelectorQuery()
      .select('#editor')
      .context(
        res => {
          this.editorCtx = res.context
          if(this.data.id) {
            this.initData(this.data.id)
          }
        }
      ).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  fileUploadHandle(filePath) {
    // 文件上传
  },
  onInputHandle({detail}) {
    // 文件内容 变化
    let {html, text, delta} = detail
    // console.log(html)
    this.data.richContent = detail
    this.setData({isNotPush: !(html && text && delta)})
  },
  initData(id) {
    // 修改的时候获取信息
    // 根据文章id，获取文章信息
    let data = {}  // 后台获取
    // this.richContent.delta = data
    this.editor
        .setContents({delta: data.delta})
  },
  onPushHandle() {
    this.setData({isAction: true})
    let {richContent, tid} = this.data
    // 发布文章
    let body = {tid, ...richContent}
    setTimeout(() => {
      this.setData({isAction: false})
      console.log(body)
      wx.switchTab({url: '/pages/home/index'})
    }, 1000)
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.fileUploadHandle(res.tempFilePaths[0])
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  }
})
