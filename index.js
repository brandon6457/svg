const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const SVG = require('./lib/SVG.js');

const questions = [{
   type: 'input',
   message: 'Enter up to three characters for the logo text.',
   name: 'logo_text'
},
{
   type: 'input',
   message: 'Enter a text color or hexadecimal number for the logo text.',
   name: 'text_color'
},
{
   type: 'list',
   message: 'Pick a shape for your logo.',
   name: 'choose_shape',
   choices: ['circle', 'triangle', 'square']
},
{
   type: 'input',
   message: 'Enter a color or hexadecimal number for the logo.',
   name: 'color'
}];
//    fs.writeFile(fileName, data, (err) => 
//    err ? console.log(err) : console.log(`Successfully created ${fileName}`)
//    );
// }
function init() {
   inquirer.prompt(questions)
      .then((data) => {
         let newShape = ''
         if (data.choose_shape == "circle") {
            newShape = new Circle();
         }
         else if (data.choose_shape == "triangle") {
            newShape = new Triangle();
         }
         else {
            newShape = new Square();
         }
         const logoText = data.logo_text;
         newShape.setColor(data.color);
         const svg = new SVG()
         svg.setInfoText(logoText, data.text_color)
         svg.setShapeInfo(newShape)
         fs.writeFileSync(`${data.choose_shape}.svg`,svg.render())
      })
}
init();