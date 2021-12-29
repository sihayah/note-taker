const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    console.log('getting...')
    if(db) {
        res.json(db);
    } else {
        res.send(404)
    }
})

module.exports = router;