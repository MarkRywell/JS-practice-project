const express = require('express');
const { dbConnect, getDb } = require('./db');

// Express App
const app = express();
app.use(express.json());

//Database
let db;

//Connect to Database
dbConnect((error) => {
    if(!error) {
        app.listen(3000, () => {
            console.log("App running at PORT 3000!");
        });
        db = getDb();
    }
});


app.get('/foods', (req, res) => {

    const page = req.query.page || 0;
    const dataPerPage = 5;
    let foods = [];

    db.collection('foods')
    .find()
    .skip(page * dataPerPage)
    .limit(dataPerPage)
    .forEach(food => foods.push(food))
    .then(() => {
        res.status(200).json(foods);
    })
    .catch(() => {
        res.status(500).json({error: "Error fetching data"});
    })
});



app.get('/foods/:name', (req, res) => {

    db.collection('foods')
    .findOne({name: req.params.name})
    .then((document) => {
        document == null ? res.status(200).json({error: "No existing document"}) : res.status(200).json(document)
    })
    .catch((error) => {
        res.status(500).json({error: error});
    });

});

// app.post('/foods', (req, res) => {
// 
    // const food = req.body;
// 
    // db.collection('foods')
    // .insertOne(food)
    // .then(result => {res.status(201).json(result)})
    // .catch(() => {
        // res.status(500).json({error: `Error ${req.method}`});
    // });
// });


app.post('/foods', (req, res) => {

    const jsonData = req.query;
    console.log(jsonData);
    jsonData['quantity'] = Number(jsonData['quantity']);

    db.collection('foods')
    .insertOne(jsonData)
    .then(result => {res.status(201).json(result)})
    .catch(error => {res.status(500).json(error)})

});

app.delete('/foods/:name', (req, res) => {

    db.collection('foods')
    .deleteOne({name: req.params.name})
    .then(() => {
        res.status(200).json({message: `${req.params.name} removed`})
    })
    .catch((error) => {
        res.status(500).json({error: error});
    })
});

app.patch('/foods/:name', (req, res) => {
    const updateFood = req.body;

    db.collection('foods')
    .updateOne({name: req.params.name}, {$set: updateFood})
    .then(result => {res.status(200).json(result)})
    .catch(error => {res.status(500).json({error: error})});
});

// app.listen(3000, () => {
    // console.log("App LISTENING at PORT 3000");
// })
// 
// app.get('/people', (req, res) => {
    // res.json({people: ["Mark Gaje", "Krishia Ocampo"]});
// })