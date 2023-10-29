import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {

    // console.log(watch('username'));

    return (
        <section className='login'>

            <div className="form_login">
                <h2>Login</h2>

                <form id='form' className='flex flex-col'>
                    <input type="email" placeholder=' ' id='email' name='email' />
                    <label for="email" style={{ textAlign: 'left' }}>Email</label>
                    <input type="password" placeholder=' ' id='password' name='password' />
                    <label for="password" style={{ textAlign: 'left' }}>Password</label>


                    <button className='btn'>Login</button>
                </form>
                <h5>Don't have an account? <Link to={'/sign-up'} className='register_link'>Register</Link></h5>
            </div>
        </section>
    )
}