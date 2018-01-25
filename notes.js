const fs = require('fs');


const FILE_NAME = 'notes-data.json';

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync(FILE_NAME); // throws error if file doesn't exist
        return JSON.parse(notesString);    // throws error on invalid JSON
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting note', title);
};

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = { title, body };

    const duplicates = notes.filter(note => note.title === title);

    if (duplicates.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const removeNote = (title) => {
    console.log('Removing note', title);
};


module.exports = {
    getAll,
    getNote,
    addNote,
    removeNote
};
