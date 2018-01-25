const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting note', title);
};

const addNote = (title, body) => {
    console.log('Adding note', title, body);
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
