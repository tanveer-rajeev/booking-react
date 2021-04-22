import React, { useContext } from 'react';
import {  Link} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from '../../App';
import "./Header.css"
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name} = loggedInUser;
    // console.log(status);
    return (
        <div className="">
        <Navbar className="navbar-main" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <h1 className="nav-title " >Working Place Booking Service</h1>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                      <Link to="/login" className="m-2 list-item">Create Account/Login</Link>

                    {
                        name && <Link to="/booking" className="m-2 list-item">Booking</Link>
                    }

                    {
                        name &&  <Link to="/roomCapacity" className="m-2 list-item">Capacity</Link>
                    }
                    {
                        name && <Link to="/login" className="m-2 list-item login-btn">{name}</Link>                              
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
};

export default Header;