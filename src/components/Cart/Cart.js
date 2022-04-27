import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    let totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <h3 className='cart-title'>
                <FontAwesomeIcon icon={faCartShopping} className="order-summery-icon" />
                Order Summary
            </h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h6>Total Price: {totalPrice}</h6>
        </div>
    );
};

export default Cart;