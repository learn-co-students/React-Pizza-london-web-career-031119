import React from "react"

const Pizza = ({ pizza, handleEdit }) =>
  <tr>
    <td>{pizza.topping}</td>
    <td>{pizza.size}</td>
    <td>{pizza.vegetarian ? 'V' : null}</td>
    <td><button onClick={handleEdit} type="button" className="btn btn-primary">Edit Pizza</button></td>
  </tr>

export default Pizza
