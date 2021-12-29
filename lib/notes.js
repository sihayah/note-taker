const fs = require('fs');
const path = require('path');

// add user input to notes, push updated arr, writeFile
function writeNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify(notesArr, null, 2)
    );
    return note;
  };

// find item to delete by id, find the index of the object with the given id, splice it out of notes, write update notes arr to file
function deleteNote(notesArr, objId) {
    notesArr.map(function(obj) {
        if(obj.id === objId){
            const index = notesArr.findIndex(item => item === obj);
            notesArr.splice(index, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/notes.json'),
                JSON.stringify(notesArr, null, 2)
              );
        }
    });
    return;
  };

  module.exports = {
      writeNote,
      deleteNote
  };