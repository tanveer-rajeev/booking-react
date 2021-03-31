import React, { useContext } from 'react';
import {  Link} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name} = loggedInUser;
    // console.log(status);
    return (
        <div className=" mt-2">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Room Booking Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    {/* <Link to="/home" className="m-2 list-item">Home</Link> */}
                    {
                     !name &&    <Link to="/login" className="m-2 list-item">Create Account/Login</Link>
                    }
                                                            
                    <Link to="/booking" className="m-2 list-item">Booking</Link>
                    {
                        name && <Link to="/login" className="m-2 list-item login-btn">{name}</Link>                              
                    }
                    {/* {                           
                    !name &&  <Link to="/login" className="m-2 list-item login-btn">Login</Link>
                    } */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
};

export default Header;