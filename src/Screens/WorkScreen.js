import React from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";
import PreviousWork from "../Components/PreviousWork";
import ReviewSection from "../Components/ReviewSection";

function WorkScreen(props) {
    return (
        <>
            <div>
            <TopSectionBanner image='images/img-5.jpg' section = 'Work'/>
        </div>
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
                <PreviousWork/>
                <ReviewSection />
                <Footer/>
            </div>
        </>

    );
}

export default WorkScreen;