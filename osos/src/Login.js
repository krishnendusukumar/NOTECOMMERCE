import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="d-flex flex-column header">
            <div className="login__div">
                <div className="header__intro">Sign in to your account</div>
                <div className="login d-flex flex-column">
                    <input type="text" className='login__username' placeholder='Email / Phone number' />
                    <input type="password" className='login__password' placeholder='Password' />
                    <button className='login__button'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login
