import React from 'react';
import {Navbar} from "react-bootstrap";
import navlogo from '../assets/images/navlogo.svg'

const NavBar = () => {
    return (
        <Navbar className="sticky-top">
            <Navbar.Brand ><img className="nav-logo" src={navlogo} alt='not-found' /></Navbar.Brand>
        </Navbar>
    );
};

export default NavBar;