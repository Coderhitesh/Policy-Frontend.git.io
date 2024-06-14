import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="top">
                    <div className="content">
                        <Link >My Account</Link>
                        <Link >Contact Us</Link>
                        <Link >About Us</Link>
                        <Link >Blogs</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to={''} >Health Insurance</Link></li>
                            <li><Link to={''} >Car Insurance</Link></li>
                            <li><Link to={''} >Term Insurance</Link></li>
                            <li><Link to={''} >Investment Plans</Link></li>
                            <li><Link to={''} >Other Insurance</Link></li>
                        </ul>
                    </nav>
                    <div className="btn-box">
                        <Link>Apply Now</Link>
                    <div className="menu">
                        <i class="ri-menu-line"></i>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
