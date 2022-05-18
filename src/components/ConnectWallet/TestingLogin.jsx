import './login.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import connectWallet from './connectWallet';

const TestingLogin = () =>{
    return(
        <Button onClick={connectWallet}>Connect Wallet</Button>
    );
}

export default TestingLogin;