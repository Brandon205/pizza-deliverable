const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza');
const Topping = require('../models/topping');

router.get('/', (req, res) => {
  //Show all pizzas 
  Pizza.find({}, (err, pizzas) => {
    if (err) return console.log(err);
    res.json(pizzas);
  })
});

router.get('/:id', (req, res) => {
  //Show one pizza with toppings 
  Pizza.findById(req.params.id).populate('toppings').exec( (err, pizza) => {
      if (err) return console.log(err);
      res.json(pizza);
    });
  })

router.post('/', (req, res) => {
  // Create a new pizza 
  Pizza.create({
    name: req.body.name,
    price: req.body.price
  }, (err) => {
    if (err) return console.log(err);
    res.redirect('/pizzas');
  })
});

router.post('/:id/toppings', (req, res) => {
  Pizza.findById(req.params.id, (err, pizza) => {
    Topping.findById(req.body.toppingId, (err, topping) => {
      pizza.toppings.push(topping);
      pizza.save( (err) => {
        res.json(pizza);
      });
    });
  });
});

router.put('/:id', (req, res) => {
  // Update a pizza via form
  Pizza.findById(req.params.id, req.body, (err, pizza) => {
    res.json(pizza)
  });
});

module.exports = router;