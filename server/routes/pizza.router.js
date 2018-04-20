const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET menu 
router.get('/', (req, res) => {
    const queryText = `SELECT id, name, description, cost FROM pizza`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in select menu items:', error);
        res.sendStatus(500);
    });
}); // end GET menu


// GET order
router.get('/order', (req, res) => {
    const queryText = `SELECT id, customer_name, order_total, time_of_order FROM "order"`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error select order', error);
        res.sendStatus(500);
    })
}); //end GET order


router.post('/order', (req, res) => {
    let order = req.body;
    const queryText = `INSERT INTO "order" ("customer_name", "order_total", "time_of_order")
                        VALUES ($1, $2, current_timestamp)`;
    pool.query(queryText, [order.customer_name, order.order_total])
    .then((result) => {
        console.log(result.rows);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error posting order', error);
        res.sendStatus(500);
    })
}) // end POST order








module.exports = router;