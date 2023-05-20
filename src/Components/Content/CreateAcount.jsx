import React, { useState } from 'react';
import FormCreateAcount from './form/FormCreateAcount';
import { useNavigate } from 'react-router-dom';
import FormWith from './form/FormWith';

const CreateAcount = () => {
  const usenavigate = useNavigate();
  const toLogin = () => {
      usenavigate("../");
  }
  
  return (
    <div className="col-12 col-lg-5 m-auto">
        <div className="nav my-4">
            <h1 className='col-12 fw-bolder'>Create Your Acount</h1>
            <div className='col-12'>
                <span>Already have an account? </span>
                <button
                onClick={toLogin}
                className="p-0 m-0 bg-transparent border-0 text-red-500">
                  Login
                </button>
            </div>
        </div>
        <FormCreateAcount/>
        <FormWith/>
    </div>
  )
}

export default CreateAcount