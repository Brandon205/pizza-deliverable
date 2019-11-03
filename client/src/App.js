import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import Pizzas from './Pizzas';
import Pizza from './Pizza';
import Toppings from './Toppings';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/pizzas" className="link">Pizzas</Link>{' | '}
          <Link to="/toppings" className="link">Toppings</Link>
        </nav>
        <Route exact path="/pizzas" component={Pizzas} />
        <Route path="/pizzas/:id" render={ (props) => <Pizza {...props} /> } />
        <Route path="/toppings" component={Toppings} />
      </Router>
    );
  }
}

export default App;
