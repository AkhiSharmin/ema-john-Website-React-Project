import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart , setCart] = useState(savedCart)

    const handelRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
           <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handelRemoveFromCart={handelRemoveFromCart}
                    ></ReviewItem>)
                }
           </div>
           <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                 <Link className='proceed-link' to='/checkout'>
                    <button className='btn-proceed btn-proceed-font'>
                        Proceed CheckOut
                        <FontAwesomeIcon icon={faTasks} />
                        </button>
                 </Link>   
                </Cart>
           </div>
        </div>
    );
};

export default Orders;