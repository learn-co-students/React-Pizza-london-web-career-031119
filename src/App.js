import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {

    }
  }
  getPizzas() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }))
      .catch(error => alert(error))
  }
  componentDidMount() {
    this.getPizzas()
  }
  editPizza = id => {
    this.setState({ selectedPizza: this.state.pizzas.find(pizza => pizza.id === id) });
  }
  updatePizza = pizza => {
    console.log(pizza)
  }
  render() {
    const { selectedPizza, pizzas } = this.state
    return (
      <Fragment>
        <Header />
        <PizzaForm pizza={selectedPizza} updatePizza={this.updatePizza} />
        <PizzaList pizzas={pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
