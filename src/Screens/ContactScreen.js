import React from 'react';
import Contact from "../Components/Contact";
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";

function ContactScreen(props) {
    return (
        <>
            <div>
                <TopSectionBanner image='images/img-8.jpg' section='Contact Us'/>
            </div>
            <div className='body-section'>

                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default ContactScreen;