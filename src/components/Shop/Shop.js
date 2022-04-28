import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakedata from "../../fakeData/products.JSON";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(fakedata)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddProduct = product => {
        const newCart = [ ...cart, product];
        setCart(newCart);
    }

    return (
        <section className="shop-container">
            <div className="products-container">
                {
                    products.slice(0, 10).map(product => <Product product={product} handleAddProduct={handleAddProduct} key={product.key} /> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />            
            </div>
        </section>
    );
};

export default Shop;
