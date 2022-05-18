import React, {Component, Fragment} from 'react';
import Errors from '../../components/Error/Error'
import Header from '../../components/Header'

class Error extends Component{
    render(){
        return(
            <Fragment>
               <div>
                    {/* <Header/> */}
                    <Errors/>  
                </div> 
            </Fragment>
        )
    }
}

export default Error;