import React from 'react';
import './Button.css'
const Button = ({randomItemAddToCart,handleRemoveFromCart}) => {
    return (
        <div className='btn-style'>
            <button onClick={() =>randomItemAddToCart()}>
            <p>Choose 1 for me randomly</p>
            </button>
            <br />
            <br />
            <button onClick={() =>handleRemoveFromCart()}>
            <p>Choose again</p>
            </button>
            
        </div>
    );
};

export default Button;