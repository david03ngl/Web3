import * as React from "react";
import { StrictMode} from "react";
import ReactDOM from "react-dom";
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Staking from './pages/Staking/Staking'
import {
  Routes,
  Route,
  HashRouter, BrowserRouter
} from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <IpfsRouter>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/staking" element={<Staking/>}></Route>
    </Routes>
  </IpfsRouter>,

//   <BrowserRouter>
//   <Routes>
//   <Route path="/" exact element={<Home/>}/>
//   <Route path="/error" element={<Error/>}/>
//   <Route path="/staking" element={<Staking/>}></Route>
// </Routes>
// </BrowserRouter>
  rootElement
);

reportWebVitals();
