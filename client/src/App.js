import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    pizzas: []
  }

  componentDidMount = () => {
    fetch('/pizzas').then(response => response.json())
    .then(json => {
      this.setState({ pizzas: json });
    })
  }

  render() {
    const mappedPizzas = this.state.pizzas.map((pizza, id) => <p key={id}>{pizza.name} - {pizza.price}</p> )
    return (
      <div className="App">
        {mappedPizzas}
      </div>
    );
}
}

export default App;
