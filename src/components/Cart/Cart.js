import React from 'react';
import './Cart.css'
const Cart = ({item}) => {
    const{name}=item
    return (
        <div>
            <h4>Product Name: <span className='cart-decoration'>{name}</span></h4>
        </div>
    );
};

export default Cart;