import React from 'react';
import {Stack} from 'react-bootstrap'
import './staking.css';
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

const ContentV1 = () =>{
    return(
        <div>
            <div className='container'>
                <div class="content-title">
                    
                </div>

                <div className="row pt-70">
                <Stack className='cards justify-content-center' id='card' direction="horizontal" gap={3}>
                    <div className="card bg-secondary justify-content-center" id='cards'><h5>Pool</h5></div>
                    <div className="card bg-secondary justify-content-center" id='cards'><h5>Staker</h5></div>
                    <div className="card bg-secondary justify-content-center" id='cards'><h5>Max</h5></div>
                </Stack>
                </div>
                
                <div className="row pt-70 gx-5" id='staking'>
                    <div class="col">
                        <div class="p-4 bg-dark justify-content-center" id='stakingContent'>
                            <h3>Staking</h3>
                            <div className='project-item justify-content-center'>
                                <div class="project-info border-bottom-2">
                                    <h5 class="flex-row-reverse"> Available Amount: 256.50 <span class="buse">$COZ</span></h5>
                                </div>

                                <div class="project-form-list">
                                    <div class="balance-form-area mb-27">
                                        <input type="text" class="form-control-sm" id="amount" placeholder="Insert Amount"></input>
                                        <span class="max ms-2">MAX</span>
                                        <div class="white-shape-small approve">
                                            <span class="hover-shape1"></span>
                                            <span class="hover-shape2"></span>
                                            <span class="hover-shape3"></span>      
                                        </div>

                                    </div>
                                </div>
                                
                                {/* <div className='row' id='stakingday'>
                                    <Stack class="cards justify-content-center" direction="horizontal" gap={3}>
                                        <div class="StakeTablinks" onclick="openTab(event, 'fourteenDays')">
                                            <button>14 Days</button>
                                        </div>
                                        <div class="StakeTablinks" onclick="openTab(event, 'thirtyDays')">
                                            <button>30 Days</button>
                                        </div>
                                        <div class="StakeTablinks" onclick="openTab(event, 'sixtyDays')">
                                            <button>60 Days</button>
                                        </div>
                                    </Stack>
                                </div> */}
                                
                                <div class="form-check form-check-inline">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                    <label class="form-check-label mb-2" for="exampleCheck">I have read and I agree to Staking Service Agreement</label>
                                </div>
                                <button type="submit" class="btn btn-success" id="confirm" >CONFIRM</button> 
                                
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 bg-dark justify-content-center" id='stakingSummary'>
                            <h3>Staking Summary</h3>
                            <Stack className='cards justify-content-center' id='card' direction="horizontal" gap={5}>
                                <div class="lockedBalance">
                                    <h5>Locked Balance</h5>
                                </div>
                                <div class="cumulativeProfit">
                                    <h5>Cumulative Profit</h5>
                                </div>
                            </Stack>
                            <h4 class="totalBalance">Total Balance</h4>
                        </div>
                    </div>
                    
                    <div class="transactionTable">
                    <table class="table table-secondary table-hover table-responsive" id="table-transaction">
                        <thead>
                            <tr className='text-center'>
                            <th scope="col">Staking Date</th>
                            <th scope="col">Total Amount</th>
                            <th scope="col">Reward Amount</th>
                            <th scope="col">Est. APY</th>
                            <th scope="col">Locked Period</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Days Left</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="submit" class="btn btn-warning mr-5" id='claimRewards'>Claim Rewards</button>
                                <button type="submit" class="btn btn-info" id='unstake'>Unstake</button></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                </div>
            </div>  
        </div>
    );
}

export default ContentV1;