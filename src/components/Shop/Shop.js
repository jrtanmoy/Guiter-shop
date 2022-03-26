import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
            if(newCart.length <= 4){
                setCart(newCart);
            }
            else{
                alert('OOPs.You cant select more than 4 items.')
            }
        }
        
    
    const randomItemAddToCart = () =>{
       const array = [...cart]
       const element = array.sort(() => Math.random() - Math.random())
                     .find(() => true);
        const newItem =[element];
        setCart(newItem)
    }

    const handleRemoveFromCart = () =>{
        const removeCart = [];
        setCart(removeCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <div className='cart-box-decor'>
                    <h4>selected items:</h4>
                    {
                        cart.map(item => <Cart
                        key={item.id}
                        item={item}
                        ></Cart>)
                    }
                    {
                        <Button
                        randomItemAddToCart={randomItemAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                      ></Button>  
                    }
                
                </div>
            </div>
        </div>
    );
};

export default Shop;