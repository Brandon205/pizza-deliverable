import React from 'react';
import Axios from 'axios';

class Toppings extends React.Component {
  state = {
    toppings: []
  }

  componentDidMount = () => {
    Axios.get('/toppings')
    .then(toppings => this.setState({ toppings: toppings.data }))
  }

  render() {
  let mappedToppings = this.state.toppings.map(topping => { 
    return (
      <div key={topping._id}>
        <h2>{topping.name}</h2> 
        <p>{topping.amount}</p> 
        <form action={`/toppings/${topping._id}/?_method=DELETE`} method="POST">
          <input type="submit" value="Delete"/>
        </form>
      </div>
    )
  });

    return (
      <div className="App">
      {mappedToppings}
      <form action="/toppings" method="POST">
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="text" name="amount" id="amount" placeholder="Amount"/>
        <input type="submit" value="Add Topping"/>
      </form>
      </div>
    )
  }
}

export default Toppings;