import React, {useEffect, useState} from 'react';
import Contact from "../Components/Contact";
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";
import {Loader} from "../Components/Loader";
import Header from "../Components/Header";

function ContactScreen(props) {

    return (
        <>
            <Header/>
                    <div>
                <TopSectionBanner image='images/al9.jpeg' section='Contact Us'/>
            </div>
                    <div className='body-section'>

                <Contact/>
                <Footer/>
            </div>
                </>
    );
}

export default ContactScreen;