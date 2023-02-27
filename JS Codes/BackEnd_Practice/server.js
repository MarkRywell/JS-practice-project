const { dbConnect, getDb } = require('./db');
require('dotenv').config();
const express = require('express');
const foodsRoute = require('./routes/foods');


// Express App
const app = express();

// database
let db;


// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// Routes
app.use('/api/foods', foodsRoute);


app.listen(process.env.PORT, () => {
    console.log(`App running at PORT ${process.env.PORT}`);
});


// dbConnect((error) => {
    // if(!error) {
        // app.listen(3000, () => {
            // console.log('App running at PORT 3000');
        // });
// 
        // db = getDb();
    // }
// });



// app.get('/members', (req, res) => {
    // let members = [];
    // 
    // db.collection('members')
    // .find()
    // .forEach(member => members.push(member))
    // .then(() => {
        // res.status(200).json(members);
    // })
    // .catch(() => {
        // res.status(500).json({error: "Error fetching data from the Database"});
    // });
// 
// });
// 