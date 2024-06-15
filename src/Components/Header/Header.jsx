import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isHealthActive, setIsHealthActive] = useState(false);
    const [isHealthMobActive, setIsHealthMobActive] = useState(false);

    const handleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleMenuDeActive = () => {
        setIsMenuActive(false);
    };

    const handleHealthActive = () => {
        setIsHealthActive(true);
    };

    const handleHealthDeActive = () => {
        setIsHealthActive(false);
    };

    const handleHealthMobActive = () => {
        setIsHealthMobActive(!isHealthMobActive);
    };

    return (
        <header>
            <div className="container">
                <div className="top">
                    <div className="content">
                        <Link>My Account</Link>
                        <Link>Contact Us</Link>
                        <Link to={'/about'}>About Us</Link>
                        <Link>Blogs</Link>
                    </div>
                </div>
                <div className="bottom">
                    <Link onClick={handleMenuDeActive} to={'/'} className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <nav>
                        <ul className='desktop-mod'>
                            <li>
                                <Link
                                    to={''}
                                    onMouseEnter={handleHealthActive}
                                    onMouseLeave={handleHealthDeActive}
                                    className="health-pointer"
                                >
                                    Health Insurance
                                    <ul className={`health-hover ${isHealthActive ? 'health-active' : ''}`}>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Life Insurance</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Life Insurance</Link></li>
                                    </ul>
                                </Link>
                            </li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Car Insurance</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Term Insurance</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Investment Plans</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Other Insurance</Link></li>
                        </ul>
                        <ul className={`mob-mod ${isMenuActive ? 'menu-Active' : ''}`}>
                            <li>
                                <Link
                                    className='health-mob-pointer'
                                    onClick={handleHealthMobActive}
                                >
                                    Health Insurance
                                </Link>
                                <ul className={`health-mob-hover ${isHealthMobActive ? 'health-mob-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                </ul>
                            </li>
                            <li><Link onClick={handleMenuDeActive}>Car Insurance</Link></li>
                            <li><Link onClick={handleMenuDeActive}>Term Insurance</Link></li>
                            <li><Link onClick={handleMenuDeActive}>Other Insurance</Link></li>
                            <div className="social-link">
                                <i className="ri-facebook-box-line"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-twitter-line"></i>
                            </div>
                        </ul>
                    </nav>
                    <div className="btn-box">
                        <Link onClick={handleMenuDeActive}>Apply Now</Link>
                        <div className="menu" onClick={handleMenuActive}>
                            <i className="ri-menu-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
