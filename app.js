const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
const command = argv._[0];

let note;   // Needs to be declared here because multiple declarations inside of switch conflict due to block-scope. In alternative, a block could be defined in each case, i.e. case 'something': {...}
switch (command) {
    case 'list':
        const allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => notes.logNote(note));
        break;
    case 'read':
        note = notes.getNote(argv.title);
        if (note) {
            console.log('Note read');
            notes.logNote(note);
        } else {
            console.log('Note not found');
        }
        break;
    case 'add':
        note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note created');
            notes.logNote(note);
        } else {
            console.log('Note title taken');
        }
        break;
    case 'remove':
        const noteRemoved = notes.removeNote(argv.title);
        const message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;
    default:
        console.log('Command not recognized');
}