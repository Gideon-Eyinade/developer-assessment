import React, { Component } from "react";
// import Cart from "./Cart";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import { Modal } from "react-responsive-modal";
import Cart from "./Cart";
import "react-responsive-modal/styles.css";
import "../css/Products.css";
import "../css/Details.css";
import "../css/Cart.css";

export class Products extends Component {
  state = {
    openModal: false,
  };

  static contextType = ProductContext;

  onClickButton = () => {
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { products, addCart} = this.context;

    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </h3>
              <span>#{product.price}</span>
              <p>{product.description}</p>

              <button
                className="cart"
                onClick={() => {
                  this.onClickButton();
                  addCart(product._id);
                }}
              >
                Add to cart
              </button>
              <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                {<Cart />}
              </Modal>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
