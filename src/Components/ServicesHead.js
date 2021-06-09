import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import { serviceData } from '../detailsData'
import './ServicesHead.css'

function ServicesHead(props) {
    var tempData ={}
    const [tab, setTab] = useState('webDevelopment')

    serviceData.map((myData,index) =>{
            console.log(myData.id,myData.title, tab)
            return (
                    (myData.id === tab ? tempData = myData : console.log('not clicked'))
            )
        })

    return (
        <>
            <div className='head-services-container'>
                <div className='head-services'>
                    <div className="head-services-item">
                        <div className="head-services-wrap .head-services-wrap :active" onClick={()=>setTab('webDevelopment')} >
                            <i className="fas fa-laptop-code"><strong className='service-font'>Web Development</strong></i>
                        </div>
                        <div className="head-services-wrap" onClick={()=>setTab('iosDevelopment')}>
                                <i className="fab fa-apple"><strong className='service-font'>iOS App Development</strong></i>
                        </div>
                        <div className="head-services-wrap" onClick={()=>setTab('androidDevelopment')}>
                                <i className="fab fa-android"><strong className='service-font'>Android Development</strong></i>
                        </div>
                    </div>
                </div>
                <div className='selected-services'>
                    <ServiceDetails title = {tempData.title} text = {tempData.text} image={tempData.image} imageBottom={tempData.imageBottom} />
                </div>
            </div>
        </>
    );
}

export default ServicesHead;