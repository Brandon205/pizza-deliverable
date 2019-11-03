import React from 'react';
import Axios from 'axios';

var mapped;
var allToppings;
class Pizza extends React.Component {
  state = {
    pizza: []
  }

  componentDidMount = () => {
    Axios.get(`/pizzas/${this.props.match.params.id}`)
    .then(pizza => {
      Axios.get(`/toppings`)
      .then(toppings => {
        allToppings = toppings.data.map(topping => <div><h5>{topping.name}, Amount: {topping.amount}</h5> <form action={`/pizzas/${pizza.data._id}/toppings`} method="POST"><input type="hidden" name="toppingId" value={topping._id} /><input type="submit" value="Add Topping" /></form></div>)
        mapped = pizza.data.toppings.map(topping => <div> <h1>{topping.name}</h1> <p>{topping.amount}</p> </div>)
        // console.log(pizza);
        this.setState({ pizza: pizza.data });
      })
    })
  }

  render() {
    // let mapped = this.state.pizza.toppings.map(topping => <div> <h1>{topping.name}</h1> <p>{topping.amount}</p> </div>)
    return (
      <>
        <h1>{this.state.pizza.name}</h1>
        <p>${this.state.pizza.price}</p>
        <h2>Current Toppings:</h2>
        <p>{mapped}</p>
        <h3>Edit this Pizza</h3>
        <form action={`/pizzas/${this.state.pizza._id}/?_method=PUT`} method="POST">
          <input type="text" name="name" id="name" placeholder="Name"/>
          <input type="text" name="price" id="price" placeholder="Price"/>
          <input type="submit" value="Edit"/>
        </form>
        <h2>All Toppings:</h2>
        {allToppings}
      </>
    )
  }
}

export default Pizza;