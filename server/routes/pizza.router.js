const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET menu 
router.get('/', (req, res) => {
    const queryText = 'SELECT id, name, description, cost FROM pizza';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in select menu items:', error);
        res.sendStatus(500);
    });
}); // end GET menu






module.exports = router;