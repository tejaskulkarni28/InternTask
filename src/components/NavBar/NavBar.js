import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/nav.css'


const NavBar = () => {
    return (
        <div className='nav-container'>
                <Link to="/"><li>LogiBricks</li></Link>
                <Link to="/blog"> <li>Blog</li></Link>
                <li><input type="text" placeholder="Search..." /></li>
        </div>
    );
};

export default NavBar;