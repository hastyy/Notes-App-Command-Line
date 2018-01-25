const fs = require('fs');


/* Write note to JSON file */
const originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

/* Read note from JSON file */
const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);    // Throws error on invalid JSON

console.log(typeof note);
console.log('Title', note.title);
