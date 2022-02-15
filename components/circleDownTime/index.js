// components/circleDownTime/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    circleWidth: {
      type: Number,
      value: 5
    },
    canvasWidth: {
      type: Number,
      value: 69
    },
    canvasHeight: {
      type: Number,
      value: 69
    },
    radColor: {
      type: String,
      value: '#F39800'
    },
    invalidColor: {
      type: String,
      value: '#ddd'
    },
    textColor: {
      type: String,
      value: '#F39800'
    },
    time: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    beginAnimation() {
      let self = this;
      const query = this.createSelectorQuery()
      query.select('#jCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          const dpr = wx.getSystemInfoSync().pixelRatio;
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr, dpr)
          ctx.beginPath();
          // 计算半径
          let c_w = (canvas.width<=canvas.height?canvas.width:canvas.height)/dpr;
          let c_r = Math.floor((c_w-self.properties.circleWidth)/2);
          // 计算圆心
          let x = canvas.width/dpr/2, y = canvas.height/dpr/2;
          // 圆弧宽度
          ctx.lineWidth =  self.properties.circleWidth; // 5
          // 画圆弧
          ctx.arc(x, y, c_r, 0, 2*Math.PI);
          ctx.strokeStyle = self.properties.radColor; // '#F39800';
          ctx.stroke();
          // 初始文本
          const str = self.properties.time + 's'
          renderText(str)
          // 文本绘制函数
          function renderText(text) {
            // 清除原有区域
            ctx.clearRect(x-15, y-15, 25, 25)
            // 重新绘制文本
            ctx.beginPath()
            ctx.font = '12px Arial';
            ctx.fillStyle = self.properties.textColor; // '#F39800';
            ctx.textAlign = 'center';
            ctx.textBaseLine = 'middle';
            ctx.moveTo(x, y+6);
            ctx.fillText(text, x, y+6);
            ctx.closePath()
          }
          // 绘制圆弧函数
          function renderArc(s,e) {
            ctx.beginPath()
            ctx.arc(x,y,c_r,s,e, true);
            ctx.strokeStyle = self.properties.invalidColor; // '#ddd';
            ctx.stroke();
            ctx.closePath()
          }
          // 倒计时
          function downTime(time) {
            // 秒转毫秒
            time = time*1000;
            // 计算绘制圆弧
            let c = 2*Math.PI;
            let cell = 100*c/time;
            let initArc = -c/4;
            if(time) {
              let timer = setInterval(()=>{
                if(time) {
                  time = time - 100;
                  if(time%1000 === 0) {
                    const t = time/1000 + 's';
                    renderText(t)
                  }
                  const preRad = initArc;
                  initArc = initArc - cell;
                  renderArc(preRad, initArc)
                } else {
                  clearInterval(timer)
                }
              }, 100)
            }
          }
          // 启动
          downTime(self.properties.time)
        })
    }
  }
})
