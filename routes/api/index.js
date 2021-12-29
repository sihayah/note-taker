const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/notes.json');

function writeNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/notes.json'),
      JSON.stringify(notesArr, null, 2)
    );
    return note;
  };

function deleteNote(notesArr) {
    const mapped = notesArr.map(function(objs) {
        return objs.id
    });
    console.log(mapped)
    // fs.writeFileSync(
    //   path.join(__dirname, '../../db/notes.json'),
    //   JSON.stringify(notesArr, null, 2)
    // );
    // return note;
  };

router.get('/notes', (req, res) => {
    console.log('getting...')
    if(notes) {
        res.json(notes);
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    req.body.id = (notes.length+1).toString();
    console.log('posting...');
    const note = writeNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    console.log('deleting')
    deleteNote(notes)
})

module.exports = router;