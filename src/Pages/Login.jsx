import React from 'react'
import '../Styles/Login.css'

const Login = () => {
  return (
    <section id="login">
      <div id="login-page">
      <div className='wrapper'>
        <h1>Login</h1>
        <div className='input-box'>
          <label><input type="text" placeholder='Enter Your email'/></label>
          <label><input type="text" placeholder='Enter your password'/></label>
          <div className='forget'>
          <p><a href="#">Forgot password</a></p>
          </div>
          <button className='login-btn'>Login</button>
          <div className='signup-para'>
          <p>Don't have an account?<a href="#">Signup</a></p></div>

        </div>

      </div>
      </div>

    </section>
  )
}

export default Login