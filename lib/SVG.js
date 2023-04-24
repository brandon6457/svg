class SVG {
   constructor() {
      this.textInfo = ''
      this.shapeInfo = ''
   }
   setInfoText(text, color) {
      if (text.length > 3) {
         throw new Error('Please choose nor more than three characters.')
      }
      this.textInfo = `<text x="150" y="125" font-size="40" text-anchor="middle" fill='${color}'>${text}</text>`
   }
   setShapeInfo(shape) {
      this.shapeInfo = shape.render()
   }
   render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >${this.shapeInfo}${this.textInfo}</svg>`
   }
}
module.exports = SVG