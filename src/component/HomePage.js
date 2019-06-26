import React from 'react';
import {Link } from 'react-router-dom'


const Header=()=>{

    return (
        <div className="ui secondry pointing menu">
                <Link to="/user" className="item">user details</Link>
            <div className="right menu">
                <Link to="/about" className="item">About us</Link>
            </div>
                
        </div>
    )
}

export default Header;