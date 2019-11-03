const express = require('express');
const router = express.Router();
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
  });
});

router.delete('/:id', (req, res) => {
  Topping.findByIdAndDelete(req.params.id, (err) => {
    if (err) return console.log(err);
    res.redirect('/toppings');
  });
});

module.exports = router