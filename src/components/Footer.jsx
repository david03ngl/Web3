import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/ico-moon-fonts.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/off-canvas.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/responsive.css';
import '../assets/css/sc-spacing.css';
import '../assets/css/scmenu-main.css';
import '../assets/css/slick-theme.min.css';
import '../assets/css/slick.css';
import '../assets/css/style.css';
import step from '../assets/img/icons/steps.png'
import step2 from '../assets/img/icons/steps2.png'
import metamask from '../assets/img/icons/meta-mask.png';
import coinbase from '../assets/img/icons/coinbase.png';
import trust from '../assets/img/icons/trust.png';
import wallet from '../assets/img/icons/wallet.png';
import logo from '../assets/img/logo.png'


const Footer = () =>{
    return(
        <div>
            <div class="gamfi-footer-section">
            <div class="container">
                <div class="footer-cta-area text-center active-shape hover-shape-inner">
                    <h2 class="title mb-15">
                        Apply for project<br />
                        incubation
                    </h2>
                    <div class="dsc mb-40 md-mb-30">
                        If you want to lanuch an IGO/IDO, It will be your perfect choice
                    </div>
                    <a class="banner-btn wow fadeInUp black-shape" data-wow-delay="0.3s" data-wow-duration="0.5s" href="igo-apply.html">
                        <span class="btn-text">Apply For IGO</span>
                        <span class="hover-shape1"></span>
                        <span class="hover-shape2"></span>
                        <span class="hover-shape3"></span>
                    </a>
                    <span class="border-shadow shadow-1"></span>
                    <span class="border-shadow shadow-2"></span>
                    <span class="border-shadow shadow-3"></span>
                    <span class="border-shadow shadow-4"></span>
                    <span class="hover-shape-bg hover_shape1"></span>
                    <span class="hover-shape-bg hover_shape2"></span>
                    <span class="hover-shape-bg hover_shape3"></span>
                </div>
            </div>
            <div class="footer-area">
                <div class="container">
                    <div class="sec-heading text-center">
                        <div class="sub-inner mb-52 mb-mb-30">
                            <img class="heading-right-image" src={step2} alt="Steps-Image"/>
                            <span class="sub-title white-color">Find us on Social</span>
                            <img class="heading-left-image" src={step} alt="Steps-Image"/>
                        </div>
                    </div>
                    <div class="footer-listing text-center mb-100 md-mb-70 xs-mb-50">
                        <ul class="footer-icon-list">
                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-telegram"></i></a></li>
                            <li><a href="#"><i class="icon-medium"></i></a></li>
                            <li><a href="#"><i class="icon-discord"></i></a></li>
                            <li><a href="#"><i class="icon-linkedin"></i></a></li>
                            <li><a href="#"><i class="icon-instagram"></i></a></li>
                            <li><a href="#"><i class="icon-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div class="footer-logo text-center mb-45"> 
                        <img src={logo} alt="Footer-logo" />
                    </div>
                    <div class="footer-mainmenu text-center mb-20">
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Token info</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="copyright-area text-center mb-0">
                        <div class="dsc mb-37 md-mb-25">Copyright © 2022. All Rights Reserved by 
                            <a target="_blank" class="gafi" href="#">GaFi</a>
                        </div>
                    </div>
                    <div class="scrollup text-center">
                        <a href="#gamfi-header"><i class="icon-arrow_up"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                         <h4 class="modals-title  mb-0" id="exampleModalLabel">Connect Wallet</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-20">Please select a wallet to connect to this marketplace</p>
                        <div class="connect-section">
                            <ul class="heading-list">
                                <li><a href="#"><span><img src={metamask} alt="Meta-mask-Image"></img></span>MetaMask</a></li>
                                <li><a href="#"><span><img src={coinbase} alt="Coinbase-Image"></img></span>Coinbase</a></li>
                                <li><a href="#"><span><img src={trust} alt="Trust-Image"></img></span>Trust Wallet</a></li>
                                <li><a href="#"><span><img src={wallet} alt="Wallet-Image"></img></span>WalletConnect</a></li>
                            </ul>
                        </div>
                        <p>By connecting your wallet, you agree to our <a href="#"><span class="modal-title">Terms of Service </span>
                            </a>and our <a href="#"><span class="modal-title"> Privacy Policy</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="assets/js/modernizr-2.8.3.min.js"></script>

        <script src="assets/js/jquery.min.js"></script>

        <script src="assets/js/bootstrap.min.js"></script>

        <script src="assets/js/jquery.magnific-popup.min.js"></script>

        <script src="assets/js/imagesloaded.pkgd.min.js"></script>

        <script src="assets/js/wow.min.js"></script>

        <script src="assets/js/jquery.counterup.min.js"></script>

        <script src="assets/js/waypoints.min.js"></script>

        <script src="assets/js/owl.carousel.min.js"></script>

        <script src="assets/js/plugins.js"></script>
       
        <script src="assets/js/time-counter.js"></script>
        
        <script src="assets/js/main.js"></script>
        </div>
    );
}

export default Footer;