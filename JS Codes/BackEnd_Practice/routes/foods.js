const express = require('express');
const Food = require('../models/Food');

const router = express.Router();

router.get('/', async (req, res) => {

    // const page = req.query.page || 0;
    // const dataPerPage = 5;
    // let foods = [];

    // db.collection('foods')
    // .find()
    // .skip(page * dataPerPage)
    // .limit(dataPerPage)
    // .forEach(food => foods.push(food))
    // .then(() => {res.status(200).json(foods)})
    // .catch(error => {res.status(500).json(error)});

    try {
        let foods = [];
        foods = await Food.find()
        res.status(200).json(foods);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }



});

router.get('/:name', (req, res) => {

    db.collection('foods')
    .findOne({name: req.params.name})
    .then((document) => {
        document == null ? res.status(200).json({data: "No existing document"}) : res.status(200).json(document);
    })
    .catch((error) => {
        res.status(500).json({error: error});
    })



});

router.post('/', async (req, res) => {
    try {
        const food = await Food.create(req.body);
        res.status(201).json(food);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/wtf', (req, res) => {
    res.json({message: "Working wtf"});
});

module.exports = router;