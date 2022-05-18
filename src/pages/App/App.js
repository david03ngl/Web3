// import logo from '../../../assets/img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as React from 'react';
import {Welcome} from '../../../components';

function App() {
  return (
    <div class="container">
      <div class="d-flex justify-content-center">
          <Welcome />
      </div>
    </div>
  );
}

export default App;