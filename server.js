const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost/pizzas', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Hey its connected to ${db.host}: ${db.port}`);
});
db.on('error', (err) => {
  console.log(err);
})

app.use('/pizzas', require('./controller/pizzas'));
app.use('/toppings', require('./controller/toppings'));

app.listen(3001);
