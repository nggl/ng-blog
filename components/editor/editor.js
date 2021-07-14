Component({
  data: {
    formats: {},
    bottom: 0,
    readOnly: false,
    placeholder: '开始输入...',
    _focus: false,
  },
  pageLifetimes: {
    onLoad() {
      wx.loadFontFace({
        family: 'Pacifico',
        source: 'url("./font/Pacifico.ttf")',
        success: console.log
      })
    },
  },
  lifetimes: {

  },
  methods: {
    readOnlyChange() {
      this.setData({
        readOnly: !this.data.readOnly
      })
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
    insertImage() {
      const that = this
      wx.chooseImage({
        count: 1,
        success: function () {
          that.editorCtx.insertImage({
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543767268337&di=5a3bbfaeb30149b2afd33a3c7aaa4ead&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151031%2Ftooopen_sy_147004931368.jpg',
            data: {
              id: 'abcd',
              role: 'god'
            },
            success: function () {
              console.log('insert image success')
            }
          })
        }
      })
    },
    onEditorReady() {
      const that = this
      wx.createSelectorQuery().select('#editor').context(function (res) {
          that.editorCtx = res.context
        }).exec()
    },

    undo() {
      this.editorCtx.undo()
    },
    redo() {
      this.editorCtx.redo()
    },
    format(e) {
      let { name, value } = e.target.dataset
      if (!name) return
      // console.log('format', name, value)
      this.editorCtx.format(name, value)

    },
  },
})
