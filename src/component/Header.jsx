import React from 'react';
import './Header.css';


function Header() {
    return (
        <div>     
                <header className="header-9 header-rlx-bg">
                    <nav className="navbar navbar-expand-lg navbar-light pt-4">
                        <div className="container">
                            <a className="navbar-brand" href="#"><img src="images/logo.svg" alt="logo"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link menu-regular active" aria-current="page" href="#">Header</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link menu-regular" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link menu-regular" href="#">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link menu-regular" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link menu-regular" href="#">FAQ</a>
                                    </li>
                                </ul>
                                <a href="#" className="button-lg-stroke">Contact Us</a>
                            </div>
                        </div>
                    </nav>
                    <div className="header-content h9-content">
                        <div className="container">
                            <div className="row column-reverse align-items-center">
                                <div className="col-md-6 col-xl-5 offset-xl-1">
                                    <h1 className="rellax heading-1">Easiest way
                                        to create your website</h1>
                                    <p className="paragraph-medium">Success return on investment termsheet  stealth
                                        disruptive product management.</p>
                                    <div className="d-sm-flex">
                                        <a href="#" className="rellax button-lg-fill" data-rellax-speed="5" data-rellax-zindex="5">Read more</a>
                                        <button type="button" className="rellax button-lg-stroke d-flex justify-content-around" data-rellax-speed="3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Watch now
                                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.878906 0.414612L11.1228 6.99998L0.878906 13.5853V0.414612Z" fill="#3445ED"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-5 offset-xl-1 rellax" data-rellax-speed="8">
                                    <img src="/resources/images/road.jpg" className="hero-img rellax" data-rellax-speed="2" alt="hero-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/jGeBXB5z17c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </header>
        </div>
    )
}

export default Header
