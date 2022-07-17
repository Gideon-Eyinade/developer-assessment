import React, { Component } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";

import "../css/Details.css";
import "../css/Cart.css";

export class Cart extends Component {
  static contextType = ProductContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Cart Empty</h2>;
    } else {
      return (
        <>
          <h3 className="summary"> CART SUMMARY </h3>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <div className="product-details">
                <img src={item.image} alt="" />
                <div className="box">
                  <div className="row">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <span>&#8358; {item.price * item.count}</span>
                  </div>
                </div>
              </div>

              <div className="amount">
                <button
                  className="remove"
                  onClick={() => removeProduct(item._id)}
                >
                  {" "}
                  Remove{" "}
                </button>
                <div className="count-group">
                  <button className="count" onClick={() => reduction(item._id)}>
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div>
            {" "}
            <div className="total">
              <h3>CHECKOUT (#{total})</h3>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Cart;
