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
  onReady() {
    
    // const query = wx.createSelectorQuery()
    // query.select('#loanCanvas')
    //   .fields({ node: true, size: true })
    //   .exec((res) => {
    //     const canvas = res[0].node
    //     const ctx = canvas.getContext('2d')
    //     const dpr = wx.getSystemInfoSync().pixelRatio;
    //     console.log('dpr--->', dpr)
    //     canvas.width = res[0].width * dpr
    //     canvas.height = res[0].height * dpr
    //     ctx.scale(dpr, dpr)
    //     // ctx.fillRect(0, 0, 100, 100)
    //     ctx.beginPath();
    //     ctx.lineWidth = 5;
    //     ctx.arc(34,34,30,0,2*Math.PI);
    //     ctx.strokeStyle = '#F39800';
    //     ctx.stroke();
    //     function renderText(text) {
    //       ctx.clearRect(20, 20, 25, 25)
    //       ctx.beginPath()
    //       ctx.font = '12px Arial';
    //       ctx.fillStyle = '#F39800';
    //       ctx.textAlign = 'center';
    //       ctx.textBaseLine = 'middle';
    //       ctx.moveTo(34, 38);
    //       ctx.fillText(text, 34, 38);
    //       ctx.closePath()
    //     }
    //     function renderArc(s,e) {
    //       ctx.beginPath()
    //       ctx.arc(34,34,30,s,e, true);
    //       ctx.strokeStyle = '#ddd';
    //       ctx.stroke();
    //       ctx.closePath()
    //     }
    //     function downTime(time) {
    //       // 秒转毫秒
    //       time = time*1000;
    //       // 计算绘制圆弧
    //       let c = 2*Math.PI;
    //       let cell = 100*c/time;
    //       let initArc = -c/4;
    //       if(time) {
    //         let timer = setInterval(()=>{
    //           if(time) {
    //             time = time - 100;
    //             if(time%1000 === 0) {
    //               const t = time/1000 + 's';
    //               renderText(t)
    //             }
    //             const preRad = initArc;
    //             initArc = initArc - cell;
    //             renderArc(preRad, initArc)
    //           } else {
    //             clearInterval(timer)
    //           }
    //         }, 100)
    //       }
    //     }
    //     downTime(20)
    //   })
  },
  onShow() {
    
  },
  onHide() {
    
  },
  
})