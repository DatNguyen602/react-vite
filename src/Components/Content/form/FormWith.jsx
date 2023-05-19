import React from 'react';
import googleIcon from "../../../assets/images/search 1.png";

const FormWith = () => {
  return (
    <div className="col-lg-10 col-12">
        <div className="loginForm mt-3">
            <p className="text-center col-12 fw-bolder">Or</p>
        </div>
        <button 
        className="col-12 d-flex justify-content-center row bg-cyan-100 m-0
        bg-gadient text-primary py-2 border-2 border-primary rounded">
            <p 
            className="m-0 col-lg-8 col-10 ms-5 p-0
            d-flex align-items-center">
                <i className="bi fs-4 bi-facebook me-lg-3"></i>
                <span className='col-lg-8 col-10'>Continue with Facebook</span>
            </p>
        </button>
        <button 
        className="col-12 d-flex justify-content-center row bg-cyan-100 m-0 mt-4
        bg-gadient text-primary py-2 border-2 border-primary rounded">
            <p 
            style={{"line-height": "36px"}}
            className="m-0 col-lg-8 col-10 ms-5 p-0
            d-flex align-items-center">
                <img src={googleIcon} className='me-lg-3' alt="" style={{"width": "24px"}}/>
                <span className='col-lg-8 col-10'>Continue with Google</span>
            </p>
        </button>
    </div>
  )
}

export default FormWith;