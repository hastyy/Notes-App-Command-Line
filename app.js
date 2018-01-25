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
        const note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note created');
            console.log('--');
            console.log('Title:', note.title);
            console.log('Body:', note.body);
        } else {
            console.log('Note title taken');
        }
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    default:
        console.log('Command not recognized');
}