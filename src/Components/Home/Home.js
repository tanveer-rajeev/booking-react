import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Credential/Login";
import Booking from "../Booking/Booking";

const Home = () => {
    return (
        <div className="row">
           <div className="col-md-4">
                <Sidebar/>
           </div>
            <div className="col-md-8">
                <Login/>
                <Booking/>
            </div>
        </div>
    );
};

export default Home;