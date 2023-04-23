const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');

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
   options: ['circle', 'triangle', 'square']
},
{
   type: 'input',
   message: 'Enter a color or hexadecimal number for the logo.',
   name: 'color'
}];
function writeToFile(data) {
   const fileName = `./output/index.html`;
   fs.writeFile(fileName, data, (err) => 
   err ? console.log(err) : console.log(`Successfully created ${fileName}`)
   );
}
function init() {
   inquirer .prompt(questions)
   .then((data) => {
      writeToFile(generateLogo(data))
   })
}
init();