import React from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sing Up</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor=''>Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor=''>Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor=''>Confirm Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="SingUp" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default SingUp;