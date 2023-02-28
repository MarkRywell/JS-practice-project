const express = require('express');
const Food = require('../models/Food');


//Get All Foods
const getFoods = async (req, res) => {
    try {
        const page = req.query.page || 0;
        const dataPerPage = 5;
        let foods = [];
        foods = await 
        Food.find()
        .skip(page * dataPerPage)
        .limit(dataPerPage)
        res.status(200).json(foods);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}


//Get specific Food
const getFood = async (req, res) => {
    try {
        let food = await Food.findOne({name: req.params.name});
        food == null ? res.status(200).json({data: "No Record found"}) : res.status(200).json(food);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
   
}

//Create Food
const createFood = async (req, res) => {
    try {
        const food = await Food.create(req.body);
        res.status(201).json(food);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

//Update Food


//Delete Food


module.exports = {
    createFood
};