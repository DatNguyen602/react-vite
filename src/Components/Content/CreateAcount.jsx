import React from 'react';
import FormCreateAcount from './form/FormCreateAcount';
import { useNavigate } from 'react-router-dom';

const CreateAcount = () => {
  const usenavigate = useNavigate();
    const toLogin = () => {
        usenavigate("/");
    }
  return (
    <div className="col-12 col-lg-5 mx-1">
        <div className="nav my-4">
            <h1 className='col-12 fw-bolder'>Create Your Acount</h1>
            <div className='col-12'>
                <span>Already have an account? </span>
                <button
                onClick={toLogin}
                className="p-0 m-0 border-0 text-danger">
                  Login
                </button>
            </div>
        </div>
        <FormCreateAcount/>
    </div>
  )
}

export default CreateAcount