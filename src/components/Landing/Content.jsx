import './landing.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/animate.css'
import '../../assets/css/ico-moon-fonts.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/off-canvas.css'
import '../../assets/css/owl.carousel.css'
import '../../assets/css/responsive.css'
import '../../assets/css/sc-spacing.css'
import '../../assets/css/scmenu-main.css'
import '../../assets/css/slick-theme.min.css'
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import icon from '../../assets/img/icons/icon1.png';
import icon1 from '../../assets/img/project/ninga-image.png'
import icon2 from '../../assets/img/project/icon-2.png'
import icon3 from '../../assets/img/project/ninga-2.png'
import icon4 from '../../assets/img/project/icon-1.png'
import icon5 from '../../assets/img/project/ninga-3.png'
import icon6 from '../../assets/img/project/icon-4.png'
import icon7 from '../../assets/img/project/ninga-4.png'
import icon8 from '../../assets/img/project/icon-3.png'
import step from '../../assets/img/icons/steps.png'
import part from '../../assets/img/icons/participate-image.png'
import part1 from '../../assets/img/icons/participate-image2.png'
import part2 from '../../assets/img/icons/participate-image3.png'
import pr from '../../assets/img/project/project-single-image.png'
import pr1 from '../../assets/img/project/project-image2.png'
import pr2 from '../../assets/img/project/project-single-image2.png'
import pr3 from '../../assets/img/project/project-image3.png'
import pr4 from '../../assets/img/project/project-single-image3.png'
import pr5 from '../../assets/img/project/project-image4.png'
import pr6 from '../../assets/img/project/project-single-image4.png'
import pr7 from '../../assets/img/project/project-image5.png'
import pr8 from '../../assets/img/project/project-single-image5.png'
import pr9 from '../../assets/img/project/project-image6.png'
import pr10 from '../../assets/img/project/project-single-image6.png'
import prv from '../../assets/img/project/privius-image.png'
import prv1 from '../../assets/img/project/previous-image.png'
import prv2 from '../../assets/img/project/privius-image2.png'
import prv3 from '../../assets/img/project/previous-image2.png'
import prv4 from '../../assets/img/project/privius-image3.png'
import prv5 from '../../assets/img/project/previous-image3.png'
import prv6 from '../../assets/img/project/privius-image4.png'
import prv7 from '../../assets/img/project/previous-image4.png'
import prv8 from '../../assets/img/project/privius-image5.png'
import prv9 from '../../assets/img/project/previous-image5.png'

const Content = () =>{
    return(
        <div>
            <div id="sc-banner" class="sc-banner banner-bg position-relative">
            <div class="container">
                <div class="banner-content text-center">
                    <img class="banner-icon wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s" src={icon} alt="icon-image"/>
                    <h1 class="banner-title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                        Metaverse Web 3.0 Gaming Launcepad & IGO
                    </h1>
                    <div class="description wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                        The next generation gaming ecosystem for IGOs and NFT
                    </div>
                    <a class="banner-btn wow fadeInUp black-shape-big" data-wow-delay="0.4s" data-wow-duration="0.7s" href="explore.html">
                        <span class="btn-text">Explore IGO</span>
                        <span class="hover-shape1"></span>
                        <span class="hover-shape2"></span>
                        <span class="hover-shape3"></span>
                    </a>
                </div>
            </div>
        </div>

        <div class="gamfi-about-secion pb-80 md-pb-45">
            <div class="container">
                <div class="banner-slider-inner wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                    <div class="sc-carousel owl-carousel" data-loop="true" data-items="1" data-margin="70" 
                        data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="1500"
                        data-dots="true" data-nav="false" data-nav-speed="true" data-center-mode="false"
                        data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true"
                        data-ipad-device="1" data-ipad-device-nav="false" data-ipad-device-dots="true"
                        data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="false"
                        data-md-device="1" data-md-device-nav="false" data-md-device-dots="true">
                        <div class="game-price-item active-shape hover-shape-inner">
                            <div class="game-price-inner">
                                <div class="total-price">
                                    <div class="price-inner d-flex mb-45 md-mb-20">
                                        <div class="image-icon">
                                            <a href="project-details.html">
                                                <img src={icon1} alt="icon-image"/>
                                            </a>
                                        </div>
                                        <div class="price-details">
                                            <h3 class="mb-15"><a href="project-details.html">The Wasted Lands</a></h3>
                                            <div class="dsc">PRICE (DDO) = 0.13 BUSD</div>
                                        </div>
                                    </div>
                                    <div class="all-raise mb-10">
                                        Total Raise38,999.70 BUSD ( 43% )
                                    </div>
                                </div>
                                <div class="allocation-max text-center">
                                    <img src={icon2}alt="icon-image" />
                                    <div class="allocation">Allocation: 500 BUSD Max</div>
                                </div>
                                <div class="targeted-raise">
                                    <div class="all-raise mb-10">Sale End In</div>
                                    <div class="timer timer_1">
                                        <ul>
                                            <li class="days"></li>
                                            <li class="hours"></li>
                                            <li class="minutes"></li>
                                            <li class="seconds"></li>
                                        </ul>
                                    </div>
                                    <div class="targeted-raise text-end">
                                        Targeted Raise 100,000 BUSD
                                    </div>
                                </div>
                            </div>
                            <div class="progress-inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                            <span class="hover-shape-bg hover_shape1"></span>
                            <span class="hover-shape-bg hover_shape2"></span>
                            <span class="hover-shape-bg hover_shape3"></span>
                        </div>
                        <div class="game-price-item active-shape hover-shape-inner">
                            <div class="game-price-inner">
                                <div class="total-price">
                                    <div class="price-inner d-flex mb-45 md-mb-20">
                                        <div class="image-icon">
                                            <a href="project-details.html">
                                                <img src={icon3} alt="icon-image"/>
                                            </a>
                                        </div>
                                        <div class="price-details">
                                            <h3 class="mb-15"><a href="project-details.html">Gaia Everworld</a></h3>
                                            <div class="dsc">PRICE (DDO) = 0.45 BUSD</div>
                                        </div>
                                    </div>
                                    <div class="all-raise mb-10">
                                        Total Raise20,789.70 BUSD ( 63% )
                                    </div>
                                </div>
                                <div class="allocation-max text-center">
                                    <img src={icon4} alt="icon-image" />
                                    <div class="allocation">Allocation: 500 BUSD Max</div>
                                </div>
                                <div class="targeted-raise">
                                    <div class="all-raise mb-10">Sale End In</div>
                                    <div class="timer timer_2">
                                         <ul>
                                               <li class="days"></li>
                                               <li class="hours"></li>
                                               <li class="minutes"></li>
                                               <li class="seconds"></li>
                                         </ul>
                                    </div>
                                    <div class="targeted-raise text-end">
                                        Targeted Raise 15,000 BUSD
                                    </div>
                                </div>
                            </div>
                            <div class="progress-inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                            <span class="hover-shape-bg hover_shape1"></span>
                            <span class="hover-shape-bg hover_shape2"></span>
                            <span class="hover-shape-bg hover_shape3"></span>
                        </div>
                        <div class="game-price-item active-shape hover-shape-inner">
                            <div class="game-price-inner">
                                <div class="total-price">
                                    <div class="price-inner d-flex mb-45  md-mb-20">
                                        <div class="image-icon">
                                            <a href="project-details.html">
                                                <img src={icon5} alt="icon-image"/>
                                            </a>
                                        </div>
                                        <div class="price-details">
                                            <h3 class="mb-15"><a href="project-details.html">Super Sidero</a></h3>
                                            <div class="dsc">PRICE (DDO) = 5.03 BUSD</div>
                                        </div>
                                    </div>
                                    <div class="all-raise mb-10">
                                        Total Raise42,379.70 BUSD ( 83% )
                                    </div>
                                </div>
                                <div class="allocation-max text-center">
                                    <img src={icon6} alt="icon-image" />
                                    <div class="allocation">Allocation: 500 BUSD Max</div>
                                </div>
                                <div class="targeted-raise">
                                    <div class="all-raise mb-10">Sale End In</div>
                                    <div class="timer timer_3">
                                         <ul>
                                               <li class="days"></li>
                                               <li class="hours"></li>
                                               <li class="minutes"></li>
                                               <li class="seconds"></li>
                                         </ul>
                                    </div>
                                    <div class="targeted-raise text-end">
                                        Targeted Raise 120,000 BUSD
                                    </div>
                                </div>
                            </div>
                            <div class="progress-inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                            <span class="hover-shape-bg hover_shape1"></span>
                            <span class="hover-shape-bg hover_shape2"></span>
                            <span class="hover-shape-bg hover_shape3"></span>
                        </div>
                        <div class="game-price-item active-shape hover-shape-inner">
                            <div class="game-price-inner">
                                <div class="total-price">
                                    <div class="price-inner d-flex mb-45  md-mb-20">
                                        <div class="image-icon">
                                            <a href="project-details.html">
                                                <img src={icon7} alt="icon-image"/>
                                            </a>
                                        </div>
                                        <div class="price-details">
                                            <h3 class="mb-15"><a href="project-details.html">Thetan Arena</a></h3>
                                            <div class="dsc">PRICE (DDO) = 1.30 BUSD</div>
                                        </div>
                                    </div>
                                    <div class="all-raise mb-10">
                                        Total Raise20,673.70 BUSD ( 36% )
                                    </div>
                                </div>
                                <div class="allocation-max text-center">
                                    <img src={icon8} alt="icon-image" />
                                    <div class="allocation">Allocation: 500 BUSD Max</div>
                                </div>
                                <div class="targeted-raise">
                                    <div class="all-raise mb-10">Sale End In</div>
                                    <div class="timer timer_4">
                                        <ul>
                                               <li class="days"></li>
                                               <li class="hours"></li>
                                               <li class="minutes"></li>
                                               <li class="seconds"></li>
                                        </ul>
                                    </div>
                                    <div class="targeted-raise text-end">
                                        Targeted Raise 110,000 BUSD
                                    </div>
                                </div>
                            </div>
                            <div class="progress-inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                            <span class="hover-shape-bg hover_shape1"></span>
                            <span class="hover-shape-bg hover_shape2"></span>
                            <span class="hover-shape-bg hover_shape3"></span>
                        </div> 
                    </div>
                </div>
                <div class="pt-130 md-pt-80 heading-area align-items-center d-flex justify-content-between wow fadeInUp mb-30" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="sec-heading">
                        <div class="sub-inner mb-15">
                            <span class="sub-title">3 easy steps</span>
                            <img class="heading-left-image" src={step} alt="Steps-Image" />
                        </div>
                        <h2 class="title">How to Participate</h2>
                    </div>
                    <div class="gamfi-btn-area">
                        <ul>
                            <li>
                                <a class="view-more black-shape" href="kyc_process.html">
                                    <span class="btn-text"> Verify KYC  </span>
                                    <i class="icon-arrow_right"></i>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="participate-area row">
                    <div class="col-lg-4">
                        <div class="participate-item d-flex wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                            <div class="number-image">
                                <img src={part} alt="Participate-Image" />
                            </div>
                            <div class="participate-info">
                                <h4 class="mb-10">Submit KYC</h4>
                                <p class="description">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="participate-item d-flex wow fadeInUp mr-30" data-wow-delay="0.3s" data-wow-duration="0.5s">
                            <div class="number-image">
                                <img src={part1} alt="Participate-Image"/>
                            </div>
                            <div class="participate-info">
                                <h4 class="mb-10">Verify Wallet</h4>
                                <p class="description">
                                    Popular belief Ipsum is not simply random text. It has roots in a piece of classical
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="participate-item d-flex wow fadeInUp mr-20" data-wow-delay="0.4s" data-wow-duration="0.6s">
                            <div class="number-image">
                                <img src={part2} alt="Participate-Image" />
                            </div>
                            <div class="participate-info">
                                <h4 class="mb-10">Start Staking</h4>
                                <p class="description">
                                    Belief norem Isum is not simply random text. It has roots in a piece of classical
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gamfi-project-section main-project-area">
            <div class="container">
                <div class="sec-inner align-items-center d-flex justify-content-between">
                    <div class="sec-heading">
                        <div class="sub-inner mb-15">
                            <span class="sub-title">Next Projects</span>
                            <img class="heading-left-image" src={step} alt="Steps-Image" />
                        </div>
                        <h2 class="title">Upcoming IGO</h2>
                    </div>
                    <div class="gamfi-btn-area">
                        <ul>
                            <li>
                                <a class="readon black-shape" href="calendar.html">
                                    <i class="icon-calendar"></i> 
                                    <span class="btn-text">Calendar</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Galaxy War</a></h4>
                                    <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>08 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr} alt="Project-Image" />
                                    </div>
                                </div>
                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>0.33 BUSD</span></li>
                                        <li>Max allocation <span>900.00 BUSD</span></li>
                                        <li>Targeted raise <span>200,000 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li class="social-share">
                                            Social
                                            <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr1} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Super Sidero</a></h4>
                                    <div class="dsc">PRICE (SSC) = 0.13 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>03 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr2} alt="Project-Image" />
                                    </div>
                                </div>

                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>0.89 BUSD</span></li>
                                        <li>Max allocation <span>300.00 BUSD</span></li>
                                        <li>Targeted raise <span>899,900 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li>
                                            Social
                                             <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr3} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Meta World</a></h4>
                                    <div class="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>05 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr4} alt="Project-Image" />
                                    </div>
                                </div>

                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>2.25 BUSD</span></li>
                                        <li>Max allocation <span>1000.00 BUSD</span></li>
                                        <li>Targeted raise <span>50,00,000 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li>
                                            Social
                                             <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr5} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Fisrt Survivor</a></h4>
                                    <div class="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content hover-shape-border">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>12 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr6} alt="Project-Image" />
                                    </div>
                                </div>
                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>0.59 BUSD</span></li>
                                        <li>Max allocation <span>399.00 BUSD</span></li>
                                        <li>Targeted raise <span>500,000 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li>
                                            Social
                                             <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr7} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Cryowar Two</a></h4>
                                    <div class="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content hover-shape-border">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>12 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr8} alt="Project-Image" />
                                    </div>
                                </div>
                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>0.66 BUSD</span></li>
                                        <li>Max allocation <span>800.00 BUSD</span></li>
                                        <li>Targeted raise <span>999,000 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li>
                                            Social
                                             <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item hover-shape-border">
                            <div class="project-info d-flex">
                                <a href="project-details.html">
                                    <img src={pr9} alt="Project-Image"/>
                                </a>
                                <div class="project-auother">
                                    <h4 class="mb-10"><a href="project-details.html">Gaia Everworld</a></h4>
                                    <div class="dsc">PRICE (GAC) = 0.13 BUSD</div>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="project-header d-flex justify-content-between">
                                    <div class="heading-title">
                                        <h4>18 Days Left</h4>
                                    </div>
                                    <div class="project-icon">
                                        <img src={pr10} alt="Project-Image" />
                                    </div>
                                </div>

                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Min allocation <span>0.25 BUSD</span></li>
                                        <li>Max allocation <span>500.00 BUSD</span></li>
                                        <li>Targeted raise <span>888,000 BUSD</span></li>
                                        <li>Access type <span>Public</span></li>
                                        <li>
                                            Social
                                             <ul class="social-icon-list">
                                                <li><a href="#"><i class="icon-telegram"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                                <li><a href="#"><i class="icon-world"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="gamfi-previous-section pb-90 md-pb-50">
            <div class="container">
                <div class="sec-inner align-items-center d-flex justify-content-between wow fadeInUp mb-50" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="sec-heading">
                        <div class="sub-inner mb-15">
                            <span class="sub-title">Complete Projects</span>
                            <img class="heading-left-image" src={step} alt="Steps-Image" />
                        </div>
                        <h2 class="title mb-0 xs-pb-20">Previous IGO</h2>
                    </div>
                    <div class="gamfi-btn-area">
                        <ul>
                            <li>
                                <a class="view-more black-shape" href="project.html">
                                    <span class="btn-text">View More</span>
                                    <i class="icon-arrow_right"></i>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row align-items-center" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                        <div class="previous-mainmenu mb-15">
                            <ul class="menu-list">
                                <li class="list1">Project name</li>
                                <li class="list2">Chain</li>
                                <li class="list3">Launched</li>
                                <li class="list4">Total Raise</li>
                                <li class="list5">Progress</li>
                            </ul>
                        </div>
                        <a href="project-details.html">
                            <div class="previous-item hover-shape-border hover-shape-inner">
                                <div class="previous-gaming">
                                    <div class="previous-image">
                                        <img src={prv} alt="Previous-Image" />
                                    </div>
                                    <div class="previous-price">
                                        <h4 class="mb-10">KyberDyne</h4>
                                        <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                    </div>
                                </div>
                                <div class="previous-chaining">
                                    <img src={prv1} alt="Chain-Image" />
                                    <span>5 Hours ago</span>
                                </div>
                                <div class="previous-raise">
                                    <span>100,000 BUSD (100%)</span>
                                    <div class="progress-inner">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                                <span class="hover-shape-bg hover_shape1"></span>
                                <span class="hover-shape-bg hover_shape2"></span>
                                <span class="hover-shape-bg hover_shape3"></span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                        <a href="project-details.html">
                            <div class="previous-item hover-shape-border hover-shape-inner">
                                <div class="previous-gaming">
                                    <div class="previous-image">
                                        <img src={prv2} alt="Previous-Image" />
                                    </div>
                                    <div class="previous-price">
                                        <h4 class="mb-10">Thetan Arena</h4>
                                        <div class="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                    </div>
                                </div>
                                <div class="previous-chaining">
                                    <img src={prv3} alt="Chain-Image" />
                                    <span>1 days ago</span>
                                </div>
                                <div class="previous-raise">
                                    <span>265,000 BUSD (73%)</span>
                                      <div class="progress-inner">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                                <span class="hover-shape-bg hover_shape1"></span>
                                <span class="hover-shape-bg hover_shape2"></span>
                                <span class="hover-shape-bg hover_shape3"></span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                        <a href="project-details.html">
                            <div class="previous-item hover-shape-border hover-shape-inner">
                                <div class="previous-gaming">
                                    <div class="previous-image">
                                        <img src={prv4} alt="Previous-Image" />
                                    </div>
                                    <div class="previous-price">
                                        <h4 class="mb-10">Galaxy War</h4>
                                        <div class="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                    </div>
                                </div>
                                <div class="previous-chaining">
                                    <img src={prv5} alt="Chain-Image" />
                                    <span>3 Day Ago</span>
                                </div>
                                <div class="previous-raise">
                                    <span>510,000 BUSD (98%)</span>
                                      <div class="progress-inner">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                                <span class="hover-shape-bg hover_shape1"></span>
                                <span class="hover-shape-bg hover_shape2"></span>
                                <span class="hover-shape-bg hover_shape3"></span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <a href="project-details.html">
                            <div class="previous-item hover-shape-border hover-shape-inner">
                                <div class="previous-gaming">
                                    <div class="previous-image">
                                        <img src={prv6} alt="Previous-Image" />
                                    </div>
                                    <div class="previous-price">
                                        <h4 class="mb-10">KingdomX</h4>
                                        <div class="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                    </div>
                                </div>
                                <div class="previous-chaining">
                                    <img src={prv7} alt="Chain-Image" />
                                    <span>5 Days Ago</span>
                                </div>
                                <div class="previous-raise">
                                    <span>100,000 BUSD (100%)</span>
                                      <div class="progress-inner">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                                <span class="hover-shape-bg hover_shape1"></span>
                                <span class="hover-shape-bg hover_shape2"></span>
                                <span class="hover-shape-bg hover_shape3"></span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.9s">
                        <a href="project-details.html">
                            <div class="previous-item hover-shape-border hover-shape-inner">
                                <div class="previous-gaming">
                                    <div class="previous-image">
                                        <img src={prv8} alt="Previous-Image" />
                                    </div>
                                    <div class="previous-price">
                                        <h4 class="mb-10">Cyber City</h4>
                                        <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                    </div>
                                </div>
                                <div class="previous-chaining">
                                    <img src={prv9} alt="Chain-Image" />
                                    <span>5 Day Agos</span>
                                </div>
                                <div class="previous-raise">
                                    <span>500,000 BUSD (86%)</span>
                                      <div class="progress-inner">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                                <span class="hover-shape-bg hover_shape1"></span>
                                <span class="hover-shape-bg hover_shape2"></span>
                                <span class="hover-shape-bg hover_shape3"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="gamfi-tokenomics-section tokenomics-left-right-shape pb-115 pt-115 md-pt-75 md-pb-45">
            <div class="container">
                <div class="sec-heading wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="sub-inner mb-15">
                        <span class="sub-title">statistics</span>
                        <img class="heading-left-image" src={step} alt="Steps-Image" />
                    </div>
                    <h2 class="title">Tokenomics</h2>
                </div>

                <div class="V1_tokenomics_content_sect wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="V1_tokenomics_content_List_Sect">
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_1">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Team</h4>
                                <h5><span class="counter">7.5</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress1">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_2">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Staking</h4>
                                <h5><span class="counter">9.50</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress2">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_3">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Advisors</h4>
                                <h5><span class="counter">10.00</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress3">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_4">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Liquidity</h4>
                                <h5><span class="counter">12.00</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress4">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_5">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Ecosystem</h4>
                                <h5><span class="counter">16.33</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress5">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_6">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Marketing</h4>
                                <h5><span class="counter">18.00</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress6">
                                
                            </div>
                        </div>
                        
                        <div class="V1_tokenomics_content_List V1_tokenomics_content_List_7">
                            <div class="V1_tokenomics_content_ListText">
                                <h4>Private Sale</h4>
                                <h5><span class="counter">30.00</span>%</h5>
                            </div>
                            <div class="V1_tokenomics_content_ListProgress V1_tokenomics_content_ListProgress7">
                                
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="tokenomics-counter wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mb-30">
                            <div class="counter-info">
                                <h4 class="counter-number mb-6"><span class="counter">386</span></h4>
                                <h5>Funded Projects</h5>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-30">
                            <div class="counter-info">
                                <h4 class="counter-number mb-6"><span class="counter">486</span></h4>
                                <h5>Unique Participants</h5>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-30">
                            <div class="counter-info">
                                <h4 class="counter-number mb-6">$<span class="counter">9</span>M+</h4>
                                <h5>Raised Capital</h5>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-30">
                            <div class="counter-info">
                                <h4 class="counter-number mb-6">$<span class="counter">18</span>M+</h4>
                                <h5>Initial Market Cap</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="gamfi_tokenomics_CornerImgs">
                    <span class="gamfi_tokenomics_CornerImg1"><img src="assets/images/bg/RoadMapV2Fram.png" alt="" class="img-fluid" /></span>
                    <span class="gamfi_tokenomics_CornerImg2"><img src="assets/images/bg/RoadMapV2Frame2.png" alt="" class="img-fluid" /></span>
                </div>
            </div>
        </div>

        <div class="gamfi-team-section pt-115 pb-85 md-pt-75 md-pb-42">
            <div class="container">
                <div class="sec-heading text-center mb-55">
                    <div class="sub-inner  mb-15">
                        <img class="heading-left-image" src="assets/images/icons/steps2.png" alt="Steps-Image" />
                        <span class="ml-10 mr-10 sub-title">Team Members</span>
                        <img class="heading-right-image" src={step} alt="Steps-Image" />
                    </div>
                    <h2 class="title">Meet The Crew</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image.png" alt="Team-image" />
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Berneice Tran</a></h4>
                            <div class="dsc">Director</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image2.png" alt="Team-image" />
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Genaro Nadel</a></h4>
                            <div class="dsc">VP of Engineering</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image3.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Lynnette Wilkes</a></h4>
                            <div class="dsc">Fullstack Developer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image4.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Claudia Hicks</a></h4>
                            <div class="dsc">Sr. Developer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image5.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Louis Baker</a></h4>
                            <div class="dsc">Software Engineer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image6.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Nathan Bean</a></h4>
                            <div class="dsc">Sr. UI Designer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image7.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">R. Hawley</a></h4>
                            <div class="dsc">Jr. UI/UX Designer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item text-center active-shape">
                            <img src="assets/images/team/team-image8.png" alt="Team-image"/>
                            <h4 class="team-title mb-8"><a href="teamdetails.html">Pedro Carrera</a></h4>
                            <div class="dsc">Graphic Designer</div>
                            <ul class="team-icon-list">
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                            </ul>
                            <span class="border-shadow shadow-1"></span>
                            <span class="border-shadow shadow-2"></span>
                            <span class="border-shadow shadow-3"></span>
                            <span class="border-shadow shadow-4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="gamfi-partner-section pb-110 md-pb-80">
            <div class="container">
                <div class="sec-heading text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="sub-inner mb-55">
                        <img class="heading-right-image" src="assets/images/icons/steps2.png" alt="Steps-Image" />
                        <span class="sub-title white-color">Our partners</span>
                        <img class="heading-left-image" src={step} alt="Steps-Image" />
                    </div>
                </div>
                <div class="gamfi-partner-inner wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                    <div class="partner-image">
                        <a href="#"><img src="assets/images/partner/partner-image.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image2.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image3.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image4.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image5.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image6.png" alt="Partner-Image" /></a>
                    </div>
                    <div class="partner-image">
                        <a href="#"><img src="assets/images/partner/partner-image.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image2.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image3.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image4.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image5.png" alt="Partner-Image" /></a>
                        <a href="#"><img src="assets/images/partner/partner-image6.png" alt="Partner-Image" /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Content;