import React from 'react';
import './Button.css'
const Button = ({handleRemoveFromCart}) => {
    // const { picture, name, price, id} = item;
    return (
        <div className='btn-style'>
            <button>
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