import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header'
import Content from '../../components/Staking/Content'
import ContentV1 from '../../components/Staking/ContentV1'
import Footer from '../../components/Footer'

class Staking extends Component {

    render(){
        return(
            <Fragment>
                <div>
                    <Header/>
                    <ContentV1/>
                    {/* <Footer/> */}
                </div>  
            </Fragment>
            
        )
    }
}
export default Staking;