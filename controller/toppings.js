const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Pizza = require('../models/pizza');
const Topping = require('../models/topping');

router.get('/', (req, res) => {
  //Get all toppings 
  Topping.find({}, (err, toppings) => {
    res.json(toppings);
  });
});

router.post('/', (req, res) => {
  //Add a new topping via form
  Topping.create({
    name: req.body.name,
    amount: req.body.amount
  }, (err) => {
    res.redirect('/toppings');
  })
})

module.exports = router