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
import step from '../../assets/img/icons/steps.png'
import rank from '../../assets/img/project/rank.png'
import rank2 from '../../assets/img/project/rank2.png'
import rank3 from '../../assets/img/project/rank3.png'

const Content = () =>{
    return(
        <div>
            <div class="gamfi-breadcrumbs-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="breadcrumbs-area sec-heading">
                            <div class="sub-inner mb-15">
                                <a class="breadcrumbs-link" href="home">Home</a>
                                <span class="sub-title">Staking</span>
                                <img class="heading-left-image" src={step} alt="Steps-Image" />
                            </div>
                            <h2 class="title mb-0">Staking</h2>
                        </div>
                    </div>
                    <div class="col-lg-7 breadcrumbs-form md-mt-30">
                        <div class="btn-area">
                            <a class="readon black-shape" href="leaderboard.html">
                                <span class="btn-text">Leaderboard</span>
                                <span class="hover-shape1"></span>
                                <span class="hover-shape2"></span>
                                <span class="hover-shape3"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="participat-information project-details-conent gamfi-about-secion pb-80 md-pb-50">
            <div class="container">
                <div class="row pt-70">
                    <div class="col-lg-6 pr-25 md-pr-15">
                        <div class="project-item">
                            <div class="project-info border-bottom-2">
                                <h4 class="mb-15">Participant IGO Stake</h4>
                                <h3 class="mb-15">256.50 <span class="buse">BUSD</span></h3>
                                <span>Total Stake</span>
                            </div>
                            <ul class="date-listing mb-35">
                                <li class="StakeTablinks" onclick="openTab(event, 'sevenDays')" id="defaultOpen">
                                    <button>7 Days</button>
                                </li>
                                <li class="StakeTablinks" onclick="openTab(event, 'fourteenDays')">
                                    <button>14 Days</button>
                                </li>
                                <li class="StakeTablinks" onclick="openTab(event, 'thirtyDays')">
                                    <button>30 Days</button>
                                </li>
                                <li class="StakeTablinks" onclick="openTab(event, 'sixtyDays')">
                                    <button>60 Days</button>
                                </li>
                            </ul>
                            <div class="project-content">
                                <div id="sevenDays" class="StakeTabcontent">
                                    <div class="project-media mb-40">
                                        <ul class="project-listing">
                                            <li>Lock period: <strong>7 days</strong> <span>APY Rate</span></li>
                                            <li>Re-locks on registration: <strong>Yes</strong> <a href="#"><span class="big-text">12 %</span></a></li>
                                            <li>Early unstake fee: <strong>25%</strong><span>*APY is dynamic</span></li>
                                            <li>Status: <strong>Unlocked</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="fourteenDays" class="StakeTabcontent">
                                    <div class="project-media mb-40">
                                        <ul class="project-listing">
                                            <li>Lock period: <strong>14 days</strong> <span>APY Rate</span></li>
                                            <li>Re-locks on registration: <strong>Yes</strong> <a href="#"><span class="big-text">20 %</span></a></li>
                                            <li>Early unstake fee: <strong>25%</strong><span>*APY is dynamic</span></li>
                                            <li>Status: <strong>Unlocked</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="thirtyDays" class="StakeTabcontent">
                                    <div class="project-media mb-40">
                                        <ul class="project-listing">
                                            <li>Lock period: <strong>30 days</strong> <span>APY Rate</span></li>
                                            <li>Re-locks on registration: <strong>Yes</strong> <a href="#"><span class="big-text">25 %</span></a></li>
                                            <li>Early unstake fee: <strong>25%</strong><span>*APY is dynamic</span></li>
                                            <li>Status: <strong>Unlocked</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="sixtyDays" class="StakeTabcontent">
                                    <div class="project-media mb-40">
                                        <ul class="project-listing">
                                            <li>Lock period: <strong>60 days</strong> <span>APY Rate</span></li>
                                            <li>Re-locks on registration: <strong>Yes</strong> <a href="#"><span class="big-text">35 %</span></a></li>
                                            <li>Early unstake fee: <strong>25%</strong><span>*APY is dynamic</span></li>
                                            <li>Status: <strong>Unlocked</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="project-form-list">
                                <h5 class="mb-18">Balance: 2889.00 BUSD</h5>
                                <div class="balance-form-area mb-27">
                                    <input type="text" placeholder="00.00"></input>
                                    <span class="max">MAX</span>
                                    <div class="white-shape-small approve">
                                        <input type="submit" value="Approve"></input>
                                        <span class="hover-shape1"></span>
                                        <span class="hover-shape2"></span>
                                        <span class="hover-shape3"></span>      
                                    </div>

                                </div>
                                <h5 class="mb-18">Staked: 256.50 BUSD</h5>
                                <div class="balance-form-area">
                                    <input type="text" placeholder="0.00"></input>
                                    <span class="max">MAX</span>
                                    <div class="white-shape-small">
                                        <input type="submit" value="Withdraw"></input>
                                        <span class="hover-shape1"></span>
                                        <span class="hover-shape2"></span>
                                        <span class="hover-shape3"></span>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 pl-25 md-pl-15">
                        <div class="project-item project-value-inner d-flex justify-content-between align-items-center mb-30">
                            <div class="project-value">
                                <h3 class="mb-15">$7,868,163.54</h3>
                                <span>Total Value Locked</span>
                            </div>
                            <div class="project-value-image">
                                <img class="heading-right-image" src={rank} alt="rank"/>
                            </div>
                        </div>
                        <div class="project-item project-value-inner d-flex justify-content-between align-items-center mb-30">
                            <div class="project-value">
                                <h3 class="mb-15">158.50 %</h3>
                                <span>Apy</span>
                            </div>
                            <div class="project-value-image">
                                <img class="heading-right-image" src={rank2} alt="rank"/>
                            </div>
                        </div>
                        <div class="project-item project-value-inner d-flex justify-content-between align-items-center">
                            <div class="project-value">
                                <h3 class="mb-15">5699</h3>
                                <span>Number of Stakers</span>
                            </div>
                            <div class="project-value-image">
                                <img class="heading-right-image" src={rank3} alt="rank"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Content;