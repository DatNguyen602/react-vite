import React, { useState } from 'react';

const FormCreateAcount = () => {
    const greenColor = {
        "border": "2px solid #6FCF97"
    }

    const btnRegister = {
        "background": "linear-gradient(271.15deg, #FE904B 7.64%, #FB724C 90.68%), #EE5757"
    }

    const [dataSignIn,setDataSignIn] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }) 

    const handleChangeDataSignIn = (e) => {
        setDataSignIn({
            ...dataSignIn,
            [e.target.name] : e.target.value,
        })
    }

    
  const handleLogError = (e) => {
    if(e.target.value === ""){
        document.querySelector(`.${e.target.name}`).innerHTML = `Invalid your ${e.target.name}`;   
        console.log(document.querySelector(`.${e.target.name}`));
        console.log("Invalid " + e.target.name);
    }
    else{
        if(e.target.name !== "confirmPassword" || handleCheckCFPass(e)) {
            handleChangeDataSignIn(e);
            document.querySelector(`.${e.target.name}`).innerHTML = "";
        }
        else{
            setDataSignIn({
                ...dataSignIn,
                confirmPassword : "",
            })
            document.querySelector(`.${e.target.name}`).innerHTML = "Cannot confirm yor Password!";
        }
        e.target.name === "email" && handleCheckMail(e);
        // console.log(dataSignIn);
    }
  }

    const handleCheckMail = (e) => {
        const regMail = /[a-zA-Z0-9]+(@.+\.com)$/;
        const logMailErr = document.querySelector(".email");

        if (!regMail.test(e.target.value)) {
            logMailErr.innerHTML = "Mail is not ...!";
        }
        else{
            logMailErr.innerHTML = "";
        }
    }

    const handleCheckCFPass = (e) => {
        return e.target.value === dataSignIn.password;
    }

  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
    <form action="handleSubmit">
        <div className='col-lg-10 col-12'>
            <label className='ms-2 text-info' 
            htmlFor="firstName">
                First Name
            </label>
            <input style={greenColor}
            onBlur={handleLogError}
            name="firstName" type="text" id="firstName" 
            className="col-12 p-2 rounded mb-2" />
            <p className='firstName text-danger'></p>
            <label className='ms-2 text-info' 
            htmlFor="lastName">
                Last Name
            </label>
            <input 
            style={greenColor}
            onBlur={handleLogError}
            name="lastName" 
            type="text" 
            id="lastName" 
            className="col-12 p-2 rounded mb-2" />
            <p className='lastName text-danger'></p>
            <label className='ms-2 text-info' 
            htmlFor="email">
                Email
            </label>
            <input 
            style={greenColor}
            onBlur={handleLogError}
            name="email" 
            type="text" 
            id="email" 
            className="col-12 p-2 rounded mb-2" />
            <p className='email text-danger'></p>
            <label className='ms-2 text-info' 
            htmlFor="password">
                Password
            </label>
            <input 
            style={greenColor}
            onBlur={handleLogError}
            name="password" 
            type="password" 
            id="password" 
            className="col-12 p-2 rounded mb-2" />
            <p className='password text-danger'></p>
            <label className='ms-2 text-info' 
            htmlFor="confirmPassword">
                Confirm Password
            </label>
            <input 
            style={greenColor}
            onBlur={handleLogError}
            name="confirmPassword" 
            type="password" 
            id="confirmPassword" 
            className="col-12 p-2 rounded mb-2" />
            <p className='confirmPassword text-danger'></p>

            <button style={btnRegister}
            onClick={handleSubmit}
            className="col-12 mt-5 bg-danger bg-gadient text-white py-3 border-0 rounded">
                Register
            </button>
        </div>
    </form>
  )
}

export default FormCreateAcount