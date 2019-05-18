import React, { Component } from 'react';

class PizzaForm extends Component {

  componentWillReceiveProps() {
    this.setState({ topping: this.props.pizza.topping });
    this.setState({ size: this.props.pizza.size });
    this.setState({ vegetarian: this.props.vegetarian, });

  }


  state = {
    topping: null,
    size: null,
    vegetarian: null,
  }

  render() {
    const { topping, size, vegetarian } = this.state
    return (<div className="form-row">
      <div className="col-5">
        <input
          name="topping"
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={topping} />
      </div>
      <div className="col">
        <select
          name="size"
          value={size}
          className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        {vegetarian
          ? (<div className="form-check">
            <input
              className="form-check-input"
              name="vegetarian"
              type="radio"
              value="Vegetarian"
              checked="true" />
            <label className="form-check-label">
              Vegetarian
          </label>
          </div>)
          : (<div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked="false" />
            <label className="form-check-label">
              Not Vegetarian
          </label>
          </div>)}
      </div>

      <div className="col">
        <button type="submit" className="btn btn-success" onClick={(e) =>
          // updatePizza(pizza = {
          //   topping: e.topping.value,
          //   size: e.size.value,
          //   vegetarian: e.vegetarian.value
          // })
          console.log(e)
        }>Submit</button>
      </div>
    </div>);
  }
}

export default PizzaForm
