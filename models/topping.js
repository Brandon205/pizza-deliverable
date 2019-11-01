const mongoose = require('mongoose');

const toppingSchema = new mongoose.Schema({
  name: String,
  amount: Number
});

module.exports = mongoose.model('Topping', toppingSchema);
