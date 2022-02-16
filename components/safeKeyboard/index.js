
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: String,
      value: 'pay'
    },
    graybg: {
      type: Boolean,
      value: true
    }, // 蒙层背景色
    title: {
      type: String,
      value: '请输入交易密码'
    }, // 输入部分的标题
    customStyle: {
      type: String,
      value: 'height: 100%'
    },
    overlay: {
      type: Boolean,
      value: false
    },
    errortip: {
      type: String,
      value: '您输入的密码错误，请重新输入'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    isFocus: false,
    value: '',
    detail: '',
    stamp: 1618390369,
    nonce: '1618390369',
    customhash: "md5(password +'salt')",
    txt_set: '请输入交易密码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      const stamp = Date.now()
      this.setData({
        show: true,
        stamp
      })
      let timer = setTimeout(_=> {
        this.setData({
          isFocus: true
        })
        clearTimeout(timer)
      }, 10)
    },
    editSetTitle(t) {
      this.setData({
        txt_set: t
      })
    },
    reset() {
      this.setData({
        detail: '',
        value: ''
      })
    },
    exit() {
      this.setData({
        show: false,
        isFocus: false,
        detail: '',
        value: ''
      })
    },
    option() {
      let f = this.data.isFocus;
      this.setData({
        isFocus: !f
      })
    },
    input() {
      if(!this.data.isFocus) {
        this.setData({
          isFocus: true
        })
      }
    },
    onInput(res) {
      this.setData({
          value: res.detail.value,
      })
    },
    onBlur(res) {
        this.setData({
            detail: JSON.stringify(res.detail, null, 2)
        })
        if(this.data.value.length === 6) {
          this.triggerEvent('onBlur', {value: res.detail.encryptedValue})
        }
    },
    onBeforeLeave() {
      this.setData({
        show: false,
        isFocus: false
      })
    },
    onAfterLeave() {
      this.triggerEvent('onAfterLeave')
    }
  }
})
