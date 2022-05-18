import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.css'
import '../assets/css/ico-moon-fonts.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/off-canvas.css'
import '../assets/css/owl.carousel.css'
import '../assets/css/responsive.css'
import '../assets/css/sc-spacing.css'
import '../assets/css/scmenu-main.css'
import '../assets/css/slick-theme.min.css'
import '../assets/css/slick.css'
import '../assets/css/style.css'
import logo from '../assets/img/logo.png'
import megamenu1 from '../assets/img/megaMenu/border-buttomShape.png'
import megamenu2 from '../assets/img/megaMenu/index-V1.png'
import megamenu3 from '../assets/img/megaMenu/index-V2.png'
import megamenu4 from '../assets/img/megaMenu/index-V3.png'
import megamenu5 from '../assets/img/megaMenu/index-V4.png'
import logodark from '../assets/img/logo-dark.png'
import connectWallet from './ConnectWallet/connectWallet';

const Header = () =>{
    return(
        // <Row className="mx-0">
        //     <Button as={Col} variant="primary">
        //         <Link to="/error">Home</Link>Home
        //     </Button>
        //     <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        // </Row>
        <div>
            <header id="gamfi-header" class="gamfi-header-section transparent-header">
            <div class="menu-area menu-sticky">
                <div class="container">
                    <div class="heaader-inner-area d-flex justify-content-between align-items-center">
                        <div class="gamfi-logo-area d-flex justify-content-between align-items-center">
                            {/* <div class="logo">
                                <a href="/"><img src={logo}/></a>
                            </div> */}
                            <div class="header-menu">
                                <ul class="nav-menu">
                                    <li><a style={{cursor: 'pointer'}}>Home</a>
                                        <ul class="sub-menu">
                                            <li><a href="error">Home 1</a></li>
                                            <li><a href="error">Home 2</a></li>
                                            <li><a href="error">Home 3</a></li>
                                            <li><a href="error">Home 4</a></li>
                                        </ul>
                                    </li>
                                    <li><a style={{cursor: 'pointer'}}>Staking</a>
                                        <ul class="sub-menu">
                                            <li><a href="staking">Staking 1</a></li>
                                            <li><a href="staking">Staking 2</a></li>
                                        </ul>
                                    </li>
                                    <li class="megaMenuHov"><a href="#">Pages +</a>
                                    
                                    <div class="Gamfi_Mega_Menu_Sect">
                                        <div class="Gamfi_Mega_Menu">
                                            <div class="container">
                                                <div class="MegaMenuContent">
                                                    <div class="megaMenuLeftSect">
                                                        <div class="megaMenuLeftBgSect">
                                                            <div class="megaMenuLeftBg">
                                                                <div class="megaMenuLeftBgColor">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="HomeMenuList">
                                                            <div class="HomeMenuListHeadings">
                                                                <h2>Home Pages</h2>
                                                                <span><img src={megamenu1} alt="" class="img-fluid" /></span>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="index.html">01 <span><img src={megamenu2} alt="Index V1" class="img-fluid" /></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="index2.html">02 <span><img src={megamenu3} alt="Index V2" class="img-fluid" /></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="index-V3.html">03 <span><img src={megamenu4} alt="Index V3" class="img-fluid" /></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="index-V4.html">04 <span><img src={megamenu5} alt="Index V3" class="img-fluid" /></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="megaMenuRightSect">
                                                        <div class="">

                                                        </div>
                                                        <div class="Menu_column ProjectColumn">
                                                            <div class="menuHeadings">
                                                                <h2>PROJECT PAGES</h2>
                                                                <span><img src={megamenu1} alt="" class="img-fluid" /></span>
                                                            </div>1
                                                            <ul>
                                                                <li><a href="">Projects Clasic 1</a> <span class="hot">HOT</span></li>
                                                                <li><a href="">Projects Clasic 2</a> <span class="new">NEW</span></li>
                                                                <li><a href="">Projects List</a></li>
                                                                <li><a href="">Project Grid</a></li>
                                                                <li><a href="">Project Calendar</a></li>
                                                                <li><a href="">Project Details 1</a></li>
                                                                <li><a href="">Project Details 2</a> <span class="new">NEW</span></li>
                                                                <li><a href="">Project Ranking</a></li>
                                                            </ul>
                                                        </div>

                                                        <div class="Two_menuColumn">
                                                            <div class="Menu_column ProjectColumn">
                                                                <div class="menuHeadings">
                                                                    <h2>STAKE & Farm</h2>
                                                                    <span><img src={megamenu1}alt="" class="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="">Staking One</a></li>
                                                                    <li><a href="">Staking Two</a></li>
                                                                    <li><a href="">Farming</a></li>
                                                                    <li><a href="">Leaderboard</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="Menu_column ProjectColumn">
                                                                <div class="menuHeadings">
                                                                    <h2>other Pages</h2>
                                                                    <span><img src={megamenu1} alt="" class="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="">Contact Us</a></li>
                                                                    <li><a href="">Roadmap</a></li>
                                                                    <li><a href="">FAQs</a> <span class="new">NEW</span></li>
                                                                    <li><a href="">Apply For Project</a></li>
                                                                    <li><a href="">Team Details</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="Two_menuColumn">
                                                            <div class="Menu_column ProjectColumn">
                                                                <div class="menuHeadings">
                                                                    <h2>TOKENOMIC & TIER</h2>
                                                                    <span><img src={megamenu1} alt="" class="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="">Tier System 1</a></li>
                                                                    <li><a href="">Tier System 2</a><span class="hot">HOT</span></li>
                                                                    <li><a href="">Tier System 3</a><span class="new">NEW</span></li>
                                                                    <li><a href="">Tokenomics</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="Menu_column ProjectColumn">
                                                                <div class="menuHeadings">
                                                                    <h2>BLOG PAGES</h2>
                                                                    <span><img src={megamenu1}alt="" class="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="">Blog Grid</a></li>
                                                                    <li><a href="">Blog Classic</a></li>
                                                                    <li><a href="">Artcles Details</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div class="Menu_column ProjectColumn">
                                                            <div class="menuHeadings">
                                                                <h2>AUth Pages</h2>
                                                                <span><img src={megamenu1} alt="" class="img-fluid" /></span>
                                                            </div>
                                                            <ul>
                                                                <li><a href="">KYC Step 01</a> <span class="hot">HOT</span></li>
                                                                <li><a href="">KYC Step 02</a></li>
                                                                <li><a href="">KYC Step 03</a></li>
                                                                <li><a href="">Connect Wallet</a></li>
                                                                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Wallet Module</a></li>
                                                                <li><a href="">Register</a></li>
                                                                <li><a href="">Login</a></li>
                                                                <li><a href="">Forget Password</a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="gamfi-btn-area">
                            <ul>
                                <li>
                                    <a id="nav-expander" class="nav-expander bar" href="#">
                                        <div class="bar">
                                            <span class="dot1"></span>
                                            <span class="dot2"></span>
                                            <span class="dot3"></span>
                                        </div>
                                    </a>
                                </li>
                                <li class="buy-token">
                                    <a class="readon black-shape" href="#">
                                        <span class="btn-text">Buy Token </span>
                                        <i class="icon-arrow_down"></i>
                                        <span class="hover-shape1"></span>
                                        <span class="hover-shape2"></span>
                                        <span class="hover-shape3"></span>
                                    </a>
                                </li>
                                <li>
                                    <button type="button" class="readon white-btn hover-shape" onClick={connectWallet}> Connect Wallet
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                <div class="close-btn">
                    <a id="nav-close2" class="nav-close">
                        <div class="line">
                            <span class="line1"></span>
                            <span class="line2"></span>
                        </div>
                    </a>
                </div>
                <div class="sidebar-logo mb-30">
                    <a href="index.html"><img src={logodark} alt=""></img></a>
                </div>
                <ul class="nav-menu">
                    <li class="current-menu-item"><a href="index.html">Home</a>
                        <ul class="sub-menu">
                            <li><a href="">Home 1</a></li>
                            <li><a href="">Home 2</a></li>
                            <li><a href="">Home 3</a></li>
                            <li><a href="">Home 4</a></li>
                        </ul>
                    </li>
                    <li><a href="">Projects</a>
                        <ul class="sub-menu">
                            <li><a href="">Projects Clasic 1</a></li>
                            <li><a href="">Projects Clasic 2</a></li>
                            <li><a href="">Projects List</a></li>
                            <li><a href="">Project Grid</a></li>
                            <li><a href="">Project Calendar</a></li>
                            <li><a href="">Project Details 1</a></li>
                            <li><a href="">Project Details 2</a></li>
                            <li><a href="">Project Ranking</a></li>
                        </ul>
                    </li>
                    <li><a href="">Staking</a>
                        <ul class="sub-menu">
                            <li><a href="">Staking 1</a></li>
                            <li><a href="">Staking 2</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children"><a href="">Projects Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="">Projects Clasic 1</a></li>
                                    <li><a href="">Projects Clasic 2</a></li>
                                    <li><a href="">Projects List</a></li>
                                    <li><a href="">Project Grid</a></li>
                                    <li><a href="">Project Calendar</a></li>
                                    <li><a href="">Project Details 1</a></li>
                                    <li><a href="">Project Details 2</a></li>
                                    <li><a href="">Project Ranking</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="">Stake & Farm</a>
                                <ul class="sub-menu">
                                    <li><a href="">Staking One</a></li>
                                    <li><a href="">Staking Two</a></li>
                                    <li><a href="">Farming</a></li>
                                    <li><a href="">Leaderboard</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="">Other Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Roadmap</a></li>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Apply For Project</a></li>
                                    <li><a href="">Team Details</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="">Tokenomics & Tier</a>
                                <ul class="sub-menu">
                                    <li><a href="">Tier System 1</a></li>
                                    <li><a href="">Tier System 2</a></li>
                                    <li><a href="">Tier System 3</a></li>
                                    <li><a href="">Tokenomics</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="">Blog & Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="">Blog Grid</a></li>
                                    <li><a href="">Blog Classic</a></li>
                                    <li><a href="">Artcles Details</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="">Auth Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="">KYC Step 01</a></li>
                                    <li><a href="">KYC Step 02</a></li>
                                    <li><a href="">KYC Step 03</a></li>
                                    <li><a href="">Connect Wallet</a></li>
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Wallet Module</a></li>
                                    <li><a href="">Register</a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="">Forgot Password</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Buy Token</a>
                        <ul class="sub-menu">
                            <li><a href="#">PancakeSwap</a></li>
                            <li><a href="#">UniSwap</a></li>
                            <li><a href="#">CoinMarketCap</a></li>
                            <li><a href="#">Gate.io</a></li>
                        </ul>
                    </li>
                    <li>
                        <button type="button" class="readon black-shape-big connectWalletBtnforMobile" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span class="btn-text">Connect </span>
                            <span class="hover-shape1"></span>
                            <span class="hover-shape2"></span>
                            <span class="hover-shape3"></span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}

export default Header;