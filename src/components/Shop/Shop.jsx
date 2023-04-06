import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {

    const [products, setProduct] = useState([])

    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProduct(data))
    },[]);



    const handleAddToCart= (product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }


    useEffect( () => {
        const storedCart = getShoppingCart();
        
        const savedCart = [];

        // step-1 get if of the addedProduct
        for(const id in storedCart){
        //step-2 get product from products state by using id
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            // step-3 add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step-4 add the added product to the saved cart
            savedCart.push(addedProduct)
         }
        }
        //step-5 set  the cart
        setCart(savedCart);

    },[products])


    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }



    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                >
                  <Link className='proceed-link' to="/orders">
                    <button className='btn-proceed'>
                        Review Orders
                        <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                  </Link> 
                </Cart>
                
            </div>

        </div>
    );
};

export default Shop;