import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
    let productPrice = parseFloat(
        cart.reduce((total, product) => total + product.price, 0).toFixed(3)
    );
    let shippingCost = parseFloat(
        cart.reduce((total, product) => total + product.shipping, 0).toFixed(3)
    );
    let taxAndVAT = parseFloat(
        (0.05 * (productPrice + shippingCost)).toFixed(3)
    );
    let totalPrice = Math.ceil(productPrice + shippingCost + taxAndVAT);

    return (
        <div>
            <h3 className="cart-title">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="order-summery-icon"
                />
                Order Summary
            </h3>
            <h4 className="text-center">Items Ordered: {cart.length}</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Product Price:</td>
                        <td>${productPrice}</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost:</td>
                        <td>${shippingCost}</td>
                    </tr>
                    <tr>
                        <td>Tax & VAT:</td>
                        <td>${taxAndVAT}</td>
                    </tr>
                    <tr className="total-price-row">
                        <td>Total Price:</td>
                        <td>${totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
