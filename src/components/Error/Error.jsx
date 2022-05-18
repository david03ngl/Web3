import './component.css';
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

const Errors = () =>{
    return (
        <div>
            <div class="container">
                <h2 className='title'>404</h2>
                <h1>Page Not Found</h1>
                <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
                <h3>Why am I seeing this?</h3>
            </div>
        </div>
        
    );
}

export default Errors;