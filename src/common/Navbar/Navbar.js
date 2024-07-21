import React, { useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    const [click, setClick] =useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>setClick(false)
    return (
        <>
            <nav className='navbar'>
                <div className='container flex_space'>
                    <div className='meni-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
                            <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                            <li><Link to='/services' onClick={closeMobileMenu}>Services</Link></li>
                            <li><Link to='/booking' onClick={closeMobileMenu}>Booking</Link></li>
                            <li><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
                            <li><Link to='/testimonail' onClick={closeMobileMenu}>Testimonial</Link></li>
                            <li><Link to='/mathscal' onClick={closeMobileMenu}>MathsCal</Link></li>
                            <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                            
                    </ul>

                    <div className="login-area flex">
                        <li>
                            <Link to='/sign-in'>
                                <i className='far fa-chevron-right'>Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <i className='far fa-chevron-right'>Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <button className='primary-btn'>Request a quote</button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>


            <header>
                <div className='container flex_space'>
                    <div className='logo'>
                        <image src='images/logo.png' alt='' />
                    </div>

                    <div className="contact flex_space">
                    <div className="box flex_space">
                            <div className='icons'>
                                <i className='far fa-clock'></i>
                            </div>
                            <div className='text'>
                                <h4>Working Hours</h4>
                                <Link to='/booking'>Monday - Sunday: 24/7</Link>
                            </div>
                        </div>
                        <div className="box flex_space">
                            <div className='icons'>
                                <i className='fas fa-phone-volume'></i>
                            </div>
                            <div className='text'>
                                <h4>Call Us Hours</h4>
                                <Link to='/contact'>+91 9876543210</Link>
                            </div>
                        </div>
                        <div className='box flex_space'>
                            <div className='icons'>
                                <i className='far fa-envelope'></i>
                            </div>
                            <div className='text'>
                                <h4>Mail Us</h4>
                                <Link to='/contact'>info@DT3.com</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </header>           
        </>
    )
}

export default Navbar;