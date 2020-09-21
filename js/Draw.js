class Draw {
  constructor() {
    const thisDraw = this

    thisDraw.colors = ['red', 'green', 'blue']
    let _result = thisDraw.drawResult()

    thisDraw.getDrawResult = function() {
      return _result;
    }
  }
    drawResult() {
      const thisDraw = this;

      let colors = [];

      for (let i = 0; i < thisDraw.colors.length; i++){
        let index = Math.floor(Math.random() * thisDraw.colors.length)
        const color = thisDraw.colors[index]
        colors.push(color)
      }
      return colors
    }
  }


//const draw = new Draw()
