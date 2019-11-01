const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  toppings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping'}]
});

module.exports = mongoose.model('Pizza', pizzaSchema);
