import React from 'react';
import googleIcon from "../../../assets/images/search 1.png";

const FormCreateAcount = () => {
    const greenColor = {
        "border": "2px solid #6FCF97"
    }

    const btnRegister = {
        "background": "linear-gradient(271.15deg, #FE904B 7.64%, #FB724C 90.68%), #EE5757"
    }

  return (
    <form action="">
        <div className='col-lg-10 col-12'>
            <label className='ms-2 text-info' htmlFor="firstName">First Name</label>
            <input style={greenColor}
            name="firstName" type="text" id="firstName" 
            className="col-12 p-2 rounded mb-2" />
            <label className='ms-2 text-info' htmlFor="lastName">Last Name</label>
            <input style={greenColor}
            name="lastName" type="text" id="lastName" 
            className="col-12 p-2 rounded mb-2" />
            <label className='ms-2 text-info' htmlFor="email">Email</label>
            <input style={greenColor}
            name="email" type="text" id="email" 
            className="col-12 p-2 rounded mb-2" />
            <label className='ms-2 text-info' htmlFor="password">Password</label>
            <input style={greenColor}
            name="password" type="password" id="password" 
            className="col-12 p-2 rounded mb-2" />
            <label className='ms-2 text-info' htmlFor="confirmPassword">Confirm Password</label>
            <input style={greenColor}
            name="confirmPassword" type="password" id="confirmPassword" 
            className="col-12 p-2 rounded mb-5" />

            <button style={btnRegister}
            className="col-12 bg-danger bg-gadient text-white py-3 border-0 rounded">
                Register
            </button>
            <div className="loginForm mt-3">
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
    </form>
  )
}

export default FormCreateAcount