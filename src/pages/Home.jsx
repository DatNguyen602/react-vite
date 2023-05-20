import React from 'react';
import logo from "../assets/images/sign_up--01.png";
import {Outlet} from "react-router-dom";

const Home = () => {
    const bgLogo = {
        "background": "linear-gradient(180deg, #E3F1FE 18.96%, rgba(227, 241, 254, 0) 91.36%)",
        "border-radius": "44% 70% 50% 30%",
    }
    return (
    <div>
        <div className='row continer h-100 align-items-center'>
            <div className="col-lg-6 d-none d-lg-block">
                <div style={bgLogo}
                className="col-10 h-75 px-2 py-5">
                    <div className="col-12">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            
            <Outlet/>

        </div>
    </div>
  )
}

export default Home;