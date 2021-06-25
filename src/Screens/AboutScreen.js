import React, {useEffect, useState} from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import About from "../Components/About";
import ReviewSection from "../Components/ReviewSection";
import Footer from "../Components/Footer";
import {Loader} from "../Components/Loader";
import Header from "../Components/Header";

function AboutScreen(props) {

    return (
        <>
            <Header/>
                    <div>
                <TopSectionBanner image='images/al2.jpg' section='Discover Our Story'/>
            </div>
                    <div className='body-section'>
                <div style={{height:"1.4rem"}}></div>
                <About address='/images/aboutus_side.svg'/>
                <ReviewSection/>
                <Footer/>
            </div>
        </>
    );
}

export default AboutScreen;