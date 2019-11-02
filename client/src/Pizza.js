import React from 'react';
import Axios from 'axios';

var mapped;
class Pizza extends React.Component {
  state = {
    pizza: []
  }

  componentDidMount = () => {
    Axios.get(`/pizzas/${this.props.match.params.id}`)
    .then(pizza => {
      mapped = pizza.data.toppings.map(topping => <div> <h1>{topping.name}</h1> <p>{topping.amount}</p> </div>)
      this.setState({ pizza: pizza.data });
    })
  }

  render() {
    // let mapped = this.state.pizza.toppings.map(topping => <div> <h1>{topping.name}</h1> <p>{topping.amount}</p> </div>)
    return (
      <>
        <h1>{this.state.pizza.name}</h1>
        <p>${this.state.pizza.price}</p>
        <h2>Toppings: </h2>
        <p>{mapped}</p>
      </>
    )
  }
}

export default Pizza;