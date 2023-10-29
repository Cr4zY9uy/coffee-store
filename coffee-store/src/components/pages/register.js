import React from 'react'
import './register.css';
export default function Register() {

    // console.log(watch('username'));

    return (
        <section>
            <div className="register">
                <div className="form_register">
                    <h2>Register</h2>

                    <form id='form' className='flex flex-col' >
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Password' />
                        <input type="text" placeholder='Confirm password' />
                        <input type="text" placeholder='Email' />

                        <button className='btn'>Sign In</button>
                    </form>

                </div>

            </div>
        </section>
    )
}