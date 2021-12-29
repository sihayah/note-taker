const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const notes = require('../../db/notes.json');
const { writeNote, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    console.log('getting...')
    if(notes) {
        res.json(notes);
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    console.log(req.body.id)
    // req.body.id = (notes.length+1).toString();
    console.log('posting...');
    const note = writeNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    console.log('deleting')
    deleteNote(notes, req.params.id)
    res.send('note deleted');
})

module.exports = router;