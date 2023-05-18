import React from 'react';
import googleIcon from "../../../assets/images/search 1.png";

const FormLogin = () => {
  return (
    <div className='col-lg-10 col-12'>
        <label className='ms-2 text-info' htmlFor="email">Email</label>
        <input name="email" type="text" id="email" 
        className="col-12 p-2 rounded border border-2 border-info mb-2" />
        <label className='ms-2 text-info' htmlFor="password">Password</label>
        <input name="password" type="password" id="password" 
        className="col-12 p-2 rounded border border-2 border-info mb-5" />

        <button 
        className="col-12 bg-danger bg-gadient text-white py-2 border-0 rounded">
            Login
        </button>
        <span className="col-12">
            <p className='mt-2 text-info p-0'>Forgot a password?</p>
        </span>
        <div className="loginForm">
            <p className="text-center col-12 fw-bolder">Or</p>
        </div>

        <button 
        className="col-12 d-flex justify-content-center row bg-info m-0
        bg-gadient text-primary py-2 border border-2 border-primary rounded">
            <p 
            className="m-0 col-8 ms-5 p-0 underline 
            d-flex align-items-center">
                <i className="bi fs-4 bi-facebook me-3"></i>
                <span className='col-8'>Continue with Facebook</span>
            </p>
        </button>
        <button 
        className="col-12 d-flex justify-content-center row bg-info m-0 mt-4
        bg-gadient text-primary py-2 border border-2 border-primary rounded">
            <p 
            className="m-0 col-8 ms-5 p-0 underline 
            d-flex align-items-center">
                <img src={googleIcon} className='me-3' alt="" style={{"width": "24px"}}/>
                <span className='col-8'>Continue with Google</span>
            </p>
        </button>
    </div>
  )
}

export default FormLogin