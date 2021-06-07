import React from 'react';
import {Button} from "./Button";
import './Footer.css'
import './Button.css'

function Footer(props) {
    return (
        <>
        <div className='footer-container'>
            <div className="footer-top">
                <div className='footer-top-imagewrap'>
                    <img src='' alt='logo'/>
                </div>
                <h2>Just say the magical word and we will do the rest</h2>
                <div className='button-adjust'>
                    <Button buttonSize='btn--large'>Start your Project</Button>
                </div>
            </div>
            <div className="footer-bottom">
                <hr></hr>
                <ul className='footer-links'>
                    <li className='footer-link-item'>
                        Privacy Policy
                    </li>
                    <li className='footer-link-item'>
                        Term of Service
                    </li>
                    <li className='footer-link-item'>
                        Contact
                    </li>
                </ul>
                <p>@ altadev.ca</p>
            </div>
        </div>
            </>
    );
}

export default Footer;