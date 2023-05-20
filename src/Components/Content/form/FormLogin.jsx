import React, { useState } from 'react';

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
            className="col-12 p-2 rounded 
            border-2 border-info mb-2" />
            <p className="logMail text-danger"></p>
            <label className='ms-2 text-info' htmlFor="password">Password</label>
            <input 
            name="password" 
            type="password" 
            id="password" 
            onBlur={hamdleCheckPass}
            className="col-12 p-2 rounded 
            border-2 border-info mb-2" />
            <p className="logPass text-danger"></p>

            <button
            type='button'
            onClick={handleLogin}
            className="col-12 bg-orange-500 bg-gadient text-white py-3 mt-5 border-0 rounded">
                Login
            </button>
            <span className="col-12">
                <button
                type='button' className='mt-2 text-info p-0'>
                    Forgot a password?
                </button>
            </span>
        </div>
    </form>
  )
}

export default FormLogin;