
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const msg = notes.getNotes();
const command = process.argv[2];
console.log(msg);
const greenMsg = chalk.green.bold(msg)
console.log(greenMsg);

// console.log(process.argv[2])
if(command === 'add'){
    console.log('adding notes');
}else if (command === 'remove'){
    console.log('removing note');
};

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler: function(argv){
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler: function(argv){
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler: function(argv){
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler: function(argv){
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
    }
})

yargs.parse()
    
console.log(yargs.argv)