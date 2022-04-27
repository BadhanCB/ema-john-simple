import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;