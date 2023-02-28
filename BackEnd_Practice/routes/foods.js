const express = require('express');
const { createFood } = require('../controllers/foodController');


const router = express.Router();

router.get('/', async (req, res) => {
                                


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

router.post('/', createFood);


router.get('/wtf', (req, res) => {
    res.json({message: "Working wtf"});
});

module.exports = router;