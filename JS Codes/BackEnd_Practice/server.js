const express = require('express');
const { dbConnect, getDb } = require('./db');

const app = express();

let db;

dbConnect((error) => {
    if(!error) {
        app.listen(3000, () => {
            console.log('App running at PORT 3000');
        });

        db = getDb();
    }
});

app.get('/members', (req, res) => {
    let members = [];
    
    db.collection('members')
    .find()
    .forEach(member => members.push(member))
    .then(() => {
        res.status(200).json(members);
    })
    .catch(() => {
        res.status(500).json({error: "Error fetching data from the Database"});
    });

});
