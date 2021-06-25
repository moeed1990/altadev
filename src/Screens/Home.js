import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import HeroSection from '../Components/HeroSection';
import Services from "../Components/Services";
import About from "../Components/About";
import PreviousWork from "../Components/PreviousWork";
import ReviewSection from "../Components/ReviewSection";
import Footer from "../Components/Footer";
import {Loader} from "../Components/Loader";
import Header from "../Components/Header";
import '../Components/Header.css';

function Home(props) {
    const [loaded, setLoaded] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },2000)
    },[])


    return (
        <>
        {!loaded ? <Loader/> : (
            <>
            <Header/>
            <div className='head-section'>
                <HeroSection />
            </div>
            <div className='body-section'>
                <div className="box">
                    <div className="square" style={{__i:"0"}}>
                        <i className="fas fa-code" style={{color:"white", fontSize:"3rem", opacity:"0.3"}}></i>
                    </div>
                    <div className="square" style={{__i:"1"}}>
                        <i className="fas fa-layer-group" style={{color:"white", fontSize:"3rem", opacity:"0.3"}}></i>
                    </div>
                    <div className="square" style={{__i:"2"}}>
                        <i className="fab fa-connectdevelop" style={{color:"white", fontSize:"3rem", opacity:"0.3"}} ></i>
                    </div>
                    <div className="square" style={{__i:"3"}}>
                        <i className="fas fa-laptop-code" style={{color:"white", fontSize:"3rem", opacity:"0.3"}}></i>
                    </div>
                    <div className="square" style={{__i:"4"}}>
                        <i className="far fa-edit" style={{color:"white", fontSize:"3rem", opacity:"0.3"}}></i>
                    </div>
                </div>
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
                <Services/>
                <About address='images/aboutus_side_1.svg' />
                <PreviousWork/>
                <ReviewSection/>
                <Footer/>
            </div>
            </>
            )}
            </>
    );
}

export default Home;