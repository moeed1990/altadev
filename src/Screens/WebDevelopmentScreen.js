import React, {useState} from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Expertise from "../Components/Expertise";
import Footer from "../Components/Footer";
import ServiceDetails from "../Components/ServiceDetails";
import {serviceData} from "../detailsData";
import Header from "../Components/Header";
import '../App.css'

function WebDevelopmentScreen(props) {
    let tempData=serviceData[0]
    return (
        <div>
            <Header/>
            <TopSectionBanner image = '/images/al8.jpeg' section='Website Development'/>
            <div className='body-section'>
                                <div className='side-icons'>
                                    <div className='fb-icon'>
                                        <Link to='/'>
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className='mail-icon'>
                                        <Link to='/contact'>
                                            <i className="fas fa-envelope" ></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className='selected-services'>
                                    <hr className='heading-separator'/>
                                    <ServiceDetails id= {tempData.id} title = {tempData.title} text = {tempData.text} image={tempData.image} imageBottom={tempData.imageBottom} />
                                </div>
                                <Expertise />
                                <div className="service-banner">
                                    With Altadev.ca you are all set with your development tools. Are you ready for that?
                                    <p>please click start your project and send us a Query!!</p>
                                </div>
                                <Footer/>
                            </div>
        </div>
    );
}

export default WebDevelopmentScreen;