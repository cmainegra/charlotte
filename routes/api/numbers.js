const express = require('express');
const router = express.Router();

const Numbers = require('../../models/Numbers')

// get request. api/numbers
// gets all items 
router.get('/api/numbers', (req, res) => {
        Numbers.find()
            .sort({ date: -1 })
            .then(numbers => res.json(numbers));
    });
router.post('/api/numbers', (req, res) => {
        Numbers.add(numbers)
            .pretty()
            .then(numbers => console.log(`${numbers} added `));
    });

module.exports = router;