import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleMenuDeActive = () => {
        setIsMenuActive(false);
    };

    // desktop dropdown

    const [isHealthActive, setIsHealthActive] = useState(false);
    const [isTravelActive, setIsTravelActive] = useState(false);
    const [isMotorActive, setIsMotorActive] = useState(false);
    const [isCorporateActive, setIsCorporateActive] = useState(false);
    const [isOtherActive, setIsOtherActive] = useState(false);

    const handleHealthActive = () => {
        setIsHealthActive(true);
    };

    const handleHealthDeActive = () => {
        setIsHealthActive(false);
    };

    const handleTravelActive = () => {
        setIsTravelActive(true);
    };

    const handleTravelDeActive = () => {
        setIsTravelActive(false);
    };

    const handleMotorActive = () => {
        setIsMotorActive(true);
    };

    const handleMotorDeActive = () => {
        setIsMotorActive(false);
    };

    const handleOtherActive = () => {
        setIsOtherActive(true);
    };

    const handleOtherDeActive = () => {
        setIsOtherActive(false);
    };

    const handleCorporateActive = () => {
        setIsCorporateActive(true);
    };

    const handleCorporateDeActive = () => {
        setIsCorporateActive(false);
    };

    // mobile dropdown 

    const [isHealthMobActive, setIsHealthMobActive] = useState(false);
    const [isTravelMobActive, setIsTravelMobActive] = useState(false);
    const [isMotorMobActive, setIsMotorMobActive] = useState(false);
    const [isCorporateMobActive, setIsCorporateMobActive] = useState(false);
    const [isOtherMobActive, setIsOtherMobActive] = useState(false);

    const handleHealthMobActive = () => {
        setIsHealthMobActive(!isHealthMobActive);
    };

    const handleTravelMobActive = () => {
        setIsTravelMobActive(!isTravelMobActive);
    };

    const handleMotorMobActive = () => {
        setIsMotorMobActive(!isMotorMobActive);
    };

    const handleCorporateMobActive = () => {
        setIsCorporateMobActive(!isCorporateMobActive);
    };

    const handleOtherMobActive = () => {
        setIsOtherMobActive(!isOtherMobActive);
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
                                        <li><Link onClick={handleMenuDeActive} to={''}>Heath Gain Policy</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Wellness</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Personal Accident</Link></li>
                                    </ul>
                                </Link>
                            </li>
                            <li><Link
                                to={''}
                                onMouseEnter={handleTravelActive}
                                onMouseLeave={handleTravelDeActive}
                                // onClick={handleMenuDeActive}
                                className='travel-pointer'
                            >
                                Travel Insurance
                                <ul className={`travel-hover ${isTravelActive ? 'travel-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Overseas Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Schengen Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Student Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Asia Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Senior Citizen Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Annual Multi Trip Insurance</Link></li>
                                </ul>
                            </Link>
                            </li>
                            <li><Link
                                className='Motor-pointer'
                                to={''}
                                onMouseEnter={handleMotorActive}
                                onMouseLeave={handleMotorDeActive}
                            // onClick={handleMenuDeActive}
                            >
                                Motor Insurance
                                <ul className={`Motor-hover ${isMotorActive ? 'Motor-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Car Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Two Wheeler Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Comprehensive Car Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Commercial Vehicle Insurance</Link></li>
                                </ul>
                            </Link></li>
                            <li><Link
                                to={''}
                                // onClick={handleMenuDeActive}
                                onMouseEnter={handleCorporateActive}
                                onMouseLeave={handleCorporateDeActive}
                                className='Corporate-pointer'
                            >
                                Corporate Plans
                                <ul className={`Corporate-hover ${isCorporateActive ? 'Corporate-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Fire Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Engineering Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Marine Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Liability Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Package Insurance</Link></li>
                                </ul>
                            </Link></li>
                            <li><Link
                                to={''}
                                onClick={handleMenuDeActive}
                                onMouseEnter={handleOtherActive}
                                onMouseLeave={handleOtherDeActive}
                                className='Other-pointer'
                            >
                                Other Insurance
                                <ul className={`Other-hover ${isOtherActive ? 'Other-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Burglary and Housebreaking</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Fire Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Package Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Marine Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={''}>Group Mediclaim Insurance</Link></li>
                                </ul>
                            </Link></li>
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
                                    <li><Link onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}>Heath gain policy</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}>Wellness</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}>Personal accident</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                onClick={handleTravelMobActive}
                            >
                                Travel Insurance
                            </Link>
                                <ul className={`Travel-mob-hover ${isTravelMobActive ? 'Travel-mob-active' : ''}`}>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Overseas Travel Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Schengen Travel Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Student Travel Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Asia Travel Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Senior Citizen Travel Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}>Annual Multi Trip Insurance</Link></li>
                                </ul>
                            </li>

                            <li><Link
                                onClick={handleMotorMobActive}
                            >Motor Insurance
                            </Link>
                                <ul className={`Motor-mob-hover ${isMotorMobActive ? 'Motor-mob-active' : ''}`}>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}>Car Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}>Two Wheeler Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}>Comprehensive Car Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}>Commercial Vehicle Insurance</Link></li>
                                </ul>
                            </li>
                            <li><Link
                                onClick={handleCorporateMobActive}
                            >Corporate Plans
                            </Link>
                                <ul className={`Corporate-mob-hover ${isCorporateMobActive ? 'Corporate-mob-active' : ''}`}>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}>Fire Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}>Engineering Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}>Marine Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}>Liability Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}>Package Insurance</Link></li>
                                </ul>
                            </li>
                            <li><Link
                                onClick={handleOtherMobActive}
                            >Other Insurance
                            </Link>
                            <ul className={`Other-mob-hover ${isOtherMobActive ? 'Other-mob-active' : ''}`}>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}>Burglary and Housebreaking</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}>Fire Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}>Package Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}>Marine Insurance</Link></li>
                                    <li><Link onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}>Group Mediclaim Insurance</Link></li>
                                </ul>
                            </li>
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
