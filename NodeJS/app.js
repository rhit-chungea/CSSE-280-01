import getNotes from './notes';
const chalk = require('chalk');
const msg = getNotes();
console.log(msg);
const greenMsg = chalk.green.bold(msg)
console.log(greenMsg);

console.log(process.argv)