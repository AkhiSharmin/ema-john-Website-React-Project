import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';



const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user)

    const handelLogOut = () =>{
        logOut()
        .then(result => {})
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/singUp">SingUp</Link>
            {user && <span className='text-white'> Welcome {user.email} <button onClick={handelLogOut}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;