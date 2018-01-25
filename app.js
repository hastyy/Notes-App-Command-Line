const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const argv = yargs.argv;
const command = argv._[0];

switch (command) {
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.getNote(argv.title);
        break;
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    default:
        console.log('Command not recognized');
}