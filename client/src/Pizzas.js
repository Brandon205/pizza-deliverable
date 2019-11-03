import React from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';

class Pizzas extends React.Component {
  state = {
    pizzas: []
  }

  componentDidMount = () => {
    fetch('/pizzas').then(response => response.json())
    .then(json => this.setState({ pizzas: json }));
  }

  render() {
    const mappedPizzas = this.state.pizzas.map((pizza, id) => <div key={id}><p>{pizza.name} - ${pizza.price}</p> <Link to={`/pizzas/${pizza._id}`}>Details</Link></div> )
    return (
      <div className="App">
        {mappedPizzas}
        <h3>Add a new Pizza</h3>
        <form action="/pizzas" method="POST">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="price" id="price" placeholder="price" />
          <input type="submit" value="Add Pizza"/>
        </form>
      </div>
    )
  }
}

export default Pizzas;