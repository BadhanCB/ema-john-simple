import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/orders">Order Review</a></li>
                    <li><a href="/inventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;