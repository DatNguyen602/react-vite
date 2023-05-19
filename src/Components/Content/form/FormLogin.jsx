import React, { useState } from 'react';
import googleIcon from "../../../assets/images/search 1.png";
import Content from './../../../../../reactjj/src/Components/Main/Content';
import { Form } from 'react-router-dom';

const FormLogin = () => {
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",
      });
      const [logError,setLogError] = useState({
        email: false,
        password: false,
      })
    
      const handleCheckMail = (e) => {
            const regMail = /[a-zA-Z0-9]+(@.+\.com)$/;
            const logMailErr = document.querySelector(".logMail");

            if(e.target.value === ""){
                logMailErr.innerHTML = "Invalid your Email!";
                setLogError({...logError,email: false});
            }
            else if (!regMail.test(e.target.value)) {
                logMailErr.innerHTML = "Mail is not ...!";
                setLogError({...logError,email: false});
            }
            else{
                logMailErr.innerHTML = "";
                setLogError({...logError,email: true});
            }
      }

      const hamdleCheckPass = (e) => {
            const logErrorPass = document.querySelector(".logPass");

            if(e.target.value === ""){
                logErrorPass.innerHTML = "Invalid your Password!";
                setLogError({...logError,password: false});
            }
            else{
                logErrorPass.innerHTML = "";
                setLogError({...logError,password: true});
            }
      }

      const handleLogin = (e) => {
        e.preventDefault();
        if(!logError.email){
            document.querySelector("#email").focus();
            return;
        }
        if(!logError.password){
            document.querySelector("#password").focus();
            return;
        }
      }

    return (
    <form action={handleLogin}>
        <div className='col-lg-10 col-12'>
            <label className='ms-2 text-info' htmlFor="email">Email</label>
            <input 
            name="email" 
            type="text" 
            id="email" 
            onBlur={handleCheckMail}
            className="col-12 p-2 rounded border 
            border-2 border-info mb-2" />
            <p className="logMail text-danger"></p>
            <label className='ms-2 text-info' htmlFor="password">Password</label>
            <input 
            name="password" 
            type="password" 
            id="password" 
            onBlur={hamdleCheckPass}
            className="col-12 p-2 rounded border 
            border-2 border-info mb-2" />
            <p className="logPass text-danger"></p>

            <button 
            onClick={handleLogin}
            className="col-12 bg-danger bg-gadient text-white py-2 mt-5 border-0 rounded">
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
                style={{"line-height": "36px"}}
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

export default FormLogin;