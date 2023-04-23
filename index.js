const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

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