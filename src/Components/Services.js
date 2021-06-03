import React from 'react';
import '../App.css';
import './Services.css';
import {Link} from "react-router-dom";


function Services(props) {
    return (
        <div className='services'>
            <div className='services-top'>
                <hr className='heading-separator'/>
                <h3 className='services-head'>
                SERVICES
                </h3>
            </div>
            <div className="services-item">
                <div className="services-wrap">
                    <Link to='/services'>
                        <i className="fas fa-laptop-code"></i>
                        <p className='service-font'>Web Development</p>
                    </Link>
                </div>
                <div className="services-wrap">
                    <Link to='/services'>
                        <i className="fab fa-apple"></i>
                        <p className='service-font'>iOS App Development</p>
                    </Link>
                </div>
                <div className="services-wrap">
                    <Link to={'/service/'}>
                        <i className="fab fa-android"></i>
                        <p className='service-font'>Android Development</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Services;