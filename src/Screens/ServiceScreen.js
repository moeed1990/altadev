import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopSectionBanner from "../Components/TopSectionBanner";
import ServicesHead from "../Components/ServicesHead";
import {Link} from "react-router-dom";


function ServiceScreen(props) {
    return (
            <>
                            <Header/>
                            <TopSectionBanner image = 'images/al8.jpeg' section='Services'/>
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
                                <ServicesHead />
                                <Footer/>
                            </div>
            </>
        );
}

export default ServiceScreen;