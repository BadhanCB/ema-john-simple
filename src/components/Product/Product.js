import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
    const { product, handleAddProduct } = props;
    const { name, img, seller, price, stock } = product;

    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddProduct(product)}
                >
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
