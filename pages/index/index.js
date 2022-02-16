// index.js
const app = getApp();
Page({
  data: {
    showCanvas: false
  },
  test() {
    this.setData({
      showCanvas: true
    })
    let circle = this.selectComponent("#circle");
    circle.beginAnimation();
  },
  keyboard() {
    let Keyboard = this.selectComponent('#keyboard')
    Keyboard.show()
  },
  onReady() {
    
  },
  onShow() {
    
  },
  onHide() {
    
  },
  
})