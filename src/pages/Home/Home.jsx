import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header'
import Content from '../../components/Landing/Content'
import Footer from '../../components/Footer'

class Home extends Component {

    render(){
        return(
            <Fragment>
                <div>
                    {/* <h1>Testing navbar</h1>
                    <ul>
                        <Link to="/error">Home</Link>
                    </ul>      */}
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Home;