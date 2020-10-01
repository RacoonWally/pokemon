import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-bar__item'>
                <Link className='link' to='/'>Lorem</Link>
            </div>
            <div className='nav-bar__item'>
                <Link className='link' to='/'>Lorem</Link>
            </div>
            <div className='nav-bar__item'>
                <Link className='link' to='/'>Lorem</Link>
            </div>
            <div className='nav-bar__item'>
                <Link className='link' to='/'>Lorem</Link>
            </div>
        </div>
    )
};

export default NavBar;
