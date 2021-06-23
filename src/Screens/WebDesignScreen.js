import React, {useState} from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Expertise from "../Components/Expertise";
import Footer from "../Components/Footer";
import ServiceDetails from "../Components/ServiceDetails";
import {serviceData} from "../detailsData";
import Header from "../Components/Header";
import '../App.css'

function WebDesignScreen({props}) {

    let tempData=serviceData[2]
    return (
        <div>
            <Header/>
            <TopSectionBanner image = '/images/al8.jpeg' section='Web Development'/>
            <div className='body-section'>
                                <div className='side-icons'>
                                    <div className='fb-icon'>
                                        <Link to='/'>
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className='mail-icon'>
                                        <Link to='/'>
                                            <i className="fas fa-envelope" ></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className='selected-services'>
                                    <hr className='heading-separator'/>
                                    <ServiceDetails
                                        id= {tempData.id}
                                        title = {tempData.title}
                                        text = {tempData.text}
                                        point1={tempData.pointa}
                                        point2={tempData.pointb}
                                        point3={tempData.pointc}
                                        point4={tempData.pointd}
                                        point5={tempData.pointe}
                                        image={tempData.image}
                                        imageBottom={tempData.imageBottom} />
                                </div>
                                <Expertise />
                                <div className="service-banner">
                                    With Altadev.ca you are all set with your designing tools. Are you ready for that?
                                    <p>please click start your project and send us a Query!!</p>
                                </div>
                                <Footer/>
                            </div>
        </div>
    );
}

export default WebDesignScreen;