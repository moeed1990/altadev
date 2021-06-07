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
                        <i className="fas fa-laptop-code"><strong className='service-font'>Web Development</strong></i>
                    </Link>
                </div>
                <div className="services-wrap">
                    <Link to='/services'>
                        <i className="fab fa-apple"><strong className='service-font'>iOS App Development</strong></i>
                    </Link>
                </div>
                <div className="services-wrap">
                    <Link to={'/service/'}>
                        <i className="fab fa-android"><strong className='service-font'>Android Development</strong></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Services;