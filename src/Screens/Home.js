import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import HeroSection from '../Components/HeroSection';
import Services from "../Components/Services";
import About from "../Components/About";
import PreviousWork from "../Components/PreviousWork";
import Footer from "../Components/Footer";
import ReviewSection from "../Components/ReviewSection";

function Home(props) {
    return (
        <>
            <div className='head-section'>
                <HeroSection />
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
                <Services/>
                <About />
                <PreviousWork/>
                <ReviewSection/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;