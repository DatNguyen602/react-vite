import React, { useState } from 'react';
import FormLogin from './form/FormLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const usenavigate = useNavigate();
    const toCreatAcount = () => {
        usenavigate("createAcount");
    }

    

  return (
        <div className="col-12 col-lg-5 mx-1">
            <div className="nav my-4">
                <h1 className='col-12 fw-bolder'>Login</h1>
                <div className='col-12'>
                    <span>Don't have an acount? </span>
                    <button
                    onClick={toCreatAcount}
                    className="p-0 bg-transparent m-0 border-0 text-danger">
                        Create Now
                    </button>
                </div>
            </div>
            <FormLogin/>
        </div>
  )
}

export default Login