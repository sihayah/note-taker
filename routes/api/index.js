const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/notes.json');

function writeNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/notes.json'),
      JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
  }

router.get('/notes', (req, res) => {
    console.log('getting...')
    if(notes) {
        res.json(notes);
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    console.log('posting...');
    // req.body.id = notes.length.toString();
    const note = writeNote(req.body, notes);
    res.json(note);
});

module.exports = router;