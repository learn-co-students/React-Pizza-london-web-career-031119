import React from 'react';
import Pizza from '../components/Pizza'

const PizzaList = ({ pizzas, editPizza }) =>
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Topping</th>
        <th scope="col">Size</th>
        <th scope="col">Vegetarian?</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody>
      {
        pizzas.map(pizza =>
          <Pizza
            key={pizza.id}
            pizza={pizza}
            handleEdit={() => editPizza(pizza.id)}
          />)
      }
    </tbody>
  </table>


export default PizzaList;
