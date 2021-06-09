import React from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import About from "../Components/About";
import ReviewSection from "../Components/ReviewSection";
import Footer from "../Components/Footer";

function AboutScreen(props) {
    return (
        <>
            <div>
                <TopSectionBanner image='images/img-9.jpg' section='About Us'/>
            </div>
            <div className='body-section'>
                <div style={{height:"1.4rem"}}></div>
                <About/>
                <ReviewSection/>
                <Footer/>
            </div>
        </>
    );
}

export default AboutScreen;