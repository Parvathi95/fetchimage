import React from 'react'
import '../Styles/Signup.css'

const SignUp = () => {
  return (
    <section id="signup">
        <div id='page'> 
        <div className='cover'>
            <h1>SignUp</h1>
            <div className="input-box">
               <label><input type="text" placeholder='Enter Your email' /></label>
               <label><input type="text" placeholder='Create a password' /></label>
               <label><input type="text" placeholder='Confirm Your password' /></label>
               </div>
               <button id='signup-btn'>Signup</button>
               <p>Already have an account?<a href="#">Login</a></p>
               </div>
               </div>
               </section>
  )
}

export default SignUp