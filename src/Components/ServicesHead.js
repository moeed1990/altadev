import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import { serviceData } from '../detailsData'
import './ServicesHead.css'
import ServiceDisplay from "./ServiceDisplay";

function ServicesHead(props) {

    return (
        <>
            <div className='head-services-container'>
                <hr className='heading-separator'/>
                <div className='head-services'>
                    <ServiceDisplay/>
                </div>
                <div className="service-banner">
                    With Altadev.ca you are all set to launch your new website.
                    <p>Are you ready for that?</p>
                </div>
            </div>
        </>
    );
}

export default ServicesHead;